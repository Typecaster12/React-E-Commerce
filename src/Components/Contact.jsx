import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Our Store',
      details: [
        '123 Shopping Street',
        'Downtown District',
        'New York, NY 10001'
      ]
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: [
        'Customer Service: +1 (555) 123-4567',
        'Sales Team: +1 (555) 123-4568',
        'Mon-Sat: 9AM - 8PM EST'
      ]
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: [
        'General: info@shopthis.com',
        'Support: support@shopthis.com',
        'Sales: sales@shopthis.com'
      ]
    }
  ];

  const faqItems = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) and next-day delivery are also available.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unused items in original packaging. Free returns for defective items.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to over 50 countries worldwide. International shipping rates vary by destination.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track orders in your account dashboard.'
    }
  ];

  return (
    <div className="contact-main-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            We're here to help! Reach out to us with any questions, concerns, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-info-icon">
                  <i className={info.icon}></i>
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <div className="contact-info-details">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              {submitMessage && (
                <div className="contact-success-message">
                  <i className="fas fa-check-circle"></i>
                  {submitMessage}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="contact-form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="order">Order Issue</option>
                    <option value="product">Product Question</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>
                
                <div className="contact-form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Please provide detailed information about your inquiry..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="contact-map-wrapper">
              <div className="contact-map-header">
                <h3>Find Us</h3>
                <p>Visit our physical store for a hands-on shopping experience.</p>
              </div>
              
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40e6fbfbd8b1d3fc!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1609459821234!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shop This Location"
                ></iframe>
              </div>
              
              <div className="contact-hours">
                <h4>Store Hours</h4>
                <div className="contact-hours-list">
                  <div className="contact-hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="contact-hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="contact-hours-item">
                    <span>Sunday</span>
                    <span>12:00 PM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="contact-faq">
        <div className="contact-faq-container">
          <div className="contact-faq-header">
            <h2>Quick Answers</h2>
            <p>Find instant answers to our most frequently asked questions.</p>
          </div>
          
          <div className="contact-faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="contact-faq-item">
                <h4 className="contact-faq-question">{item.question}</h4>
                <p className="contact-faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="contact-faq-cta">
            <p>Need more detailed information?</p>
            <a href="/faq" className="contact-faq-link">
              Visit our complete FAQ page
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
