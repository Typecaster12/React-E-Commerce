import { useState, useRef} from 'react';
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import './ChatBot.css';

// --- IMPORTANT ---
// Make sure you have a .env.local file in your project's root directory
// with your API key like this:
// VITE_API_KEY=your_google_ai_api_key_here
// And that you have wrapped your App in <QueryClientProvider>
// ---

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`

/**
 * The core API call function that will be used by useMutation.
 * It takes the user's prompt and returns the API response.
 * @param {string} userPrompt - The text input from the user.
 * @returns {Promise<string>} - The response text from the bot.
 */
const sendMessageToGemini = async (userPrompt) => {
    const requestBody = {
        contents: [{ parts: [{ text: userPrompt }] }],
    }

    const { data } = await axios.post(API_URL, requestBody, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const botResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (botResponseText) {
        return botResponseText
    } else {
        throw new Error('Invalid response structure from API.')
    }
}

const ChatBot = () => {
    const [prompt, setPrompt] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);


    // useMutation hook from TanStack Query to handle the API call
    const mutation = useMutation({
        mutationFn: sendMessageToGemini,
        onSuccess: (botResponseText) => {
            // On success, add the bot's message to the chat history
            const botMessage = { role: 'bot', text: botResponseText }
            setChatHistory((prev) => [...prev, botMessage])
            setPrompt('') // Clear input field after successful submission
        },
        onError: (error) => {
            // On error, log it and remove the user's optimistic message
            console.error('Error fetching from Gemini API:', error)
            setChatHistory((prev) => prev.slice(0, -1))
        },

    });

    /**
     * Handles the form submission.
     */
    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!prompt.trim()) return

        // Optimistically add user's message to chat history
        const userMessage = { role: 'user', text: prompt }
        setChatHistory((prev) => [...prev, userMessage])

        // Trigger the mutation
        mutation.mutate(prompt)
    }

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    if (!isOpen) {
        return (
            <button onClick={toggleChat} className="chatbot-toggle-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-4 4s1.78 4 4 4c0 2-2 3-3 3" />
                    <path d="M12 20.94c-1.5 0-2.75 1.06-4 1.06-3 0-6-8-6-12.22A4.91 4.91 0 0 1 7 5c2.22 0-4 1.44-4 4s1.78 4 4 4c0 2 2 3 3 3" />
                </svg>
            </button>
        );
    }

    return (
        <div className="chatbot-container">
            <header className="chatbot-header">
                <h1>Gemini AI ChatBot</h1>
                <button onClick={toggleChat} className="chatbot-close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </header>

            <main className="chatbot-main">
                <div className="chatbot-messages">
                    {chatHistory.map((message, index) => (
                        <div
                            key={index}
                            className={`message-wrapper ${message.role}`}
                        >
                            <div
                                className={`message-bubble ${message.role}`}
                            >
                                {/* Using dangerouslySetInnerHTML to render markdown. Be cautious if the source is not trusted. */}
                                <p dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br />') }}></p>
                            </div>
                        </div>
                    ))}

                    {mutation.isPending && (
                        <div className="message-wrapper bot">
                            <div className="thinking-bubble">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}

                    {mutation.isError && (
                        <div className="error-container">
                            <div className="error-message">
                                <p>Sorry, something went wrong. Please try again later.</p>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </main>

            <footer className="chatbot-footer">
                <form onSubmit={handleSendMessage} className="chat-form">
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage(e);
                            }
                        }}
                        placeholder="Ask me anything..."
                        className="chat-input"
                        disabled={mutation.isPending}
                        rows="1"
                    />
                    <button
                        type="submit"
                        disabled={mutation.isPending || !prompt.trim()}
                        className="send-button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="send-icon"
                        >
                            <path d="m3 3 3 9-3 9 19-9Z" />
                            <path d="M6 12h16" />
                        </svg>
                    </button>
                </form>
            </footer>
        </div>
    )
}

export default ChatBot
