import { useState } from 'react';
import data from '../data/faqData.json';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const formatAnswer = (answer) => {
    return answer.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div className="faq-main-container">
      <div className="faq-container">
        {/* Header Section */}
        <div className="faq-header">
          <h1 className="faq-heading">Frequently Asked Questions</h1>
          <p className="faq-subheading">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>
        </div>

        {/* Accordion Section */}
        <div className="faq-accordion">
          {data.faqs.map((faq) => {
            const isOpen = openItems.has(faq.id);
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'active' : ''}`}>
                {/* Question Header */}
                <button 
                  className="faq-question" 
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-content">
                    <span className="faq-category">{faq.category}</span>
                    <h3 className="faq-question-text">{faq.question}</h3>
                  </div>
                  <div className={`faq-icon ${isOpen ? 'rotated' : ''}`}>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </button>

                {/* Answer Content */}
                <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  <div className="faq-answer-content">
                    {formatAnswer(faq.answer)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Info Section */}
        <div className="faq-contact">
          <div className="faq-contact-header">
            <h3>Still have questions?</h3>
            <p>We're here to help! Contact our support team.</p>
          </div>
          <div className="faq-contact-info">
            <div className="faq-contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email Support</strong>
                <p>{data.contactInfo.email}</p>
              </div>
            </div>
            <div className="faq-contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Phone Support</strong>
                <p>{data.contactInfo.phone}</p>
              </div>
            </div>
            <div className="faq-contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <strong>Support Hours</strong>
                <p>{formatAnswer(data.contactInfo.hours)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
