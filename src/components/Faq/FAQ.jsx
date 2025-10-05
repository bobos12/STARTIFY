import React, { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "What is your service about?",
    answer:
      "We provide AI-powered solutions to help businesses automate workflows, analyze data, and improve efficiency."
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team anytime through the contact form or via email at support@example.com."
  },
  {
    question: "Do you offer free trials?",
    answer:
      "Yes! We offer a 14-day free trial so you can explore all features before choosing a plan."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section  text-light">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of the most common questions we get from our users.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`faq-icon ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="faq-footer">
          Still have questions?{" "}
          <a href="#contact">Contact our support team →</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
