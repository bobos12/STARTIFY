import React, { useState } from "react";
import "./contact.css"; // custom CSS file

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className="contact-section py-5 py-md-5">
      <div className="container text-center text-white">
        {/* Header */}
        <p className="fw-semibold fs-5 text-uppercase mb-2">Customer Care</p>
        <h2 className="fw-bold display-5 mb-3">We&apos;re Here to Help</h2>
        <p className="text-light fs-5 mx-auto mb-5 w-75 ">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </p>

        <div className="row align-items-start justify-content-center g-5">
          {/* Left Side */}
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src="src/assets/contact1.png"
              alt="contact us"
              className="contact-image img-fluid rounded shadow-lg"
            />
          </div>

          {/* Right Side Form */}
          <div className="col-lg-6 text-start">
            <p className="fw-semibold mb-3">Select Options for Business Engagement</p>

            {/* ✅ Selectable Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              {["General Inquiry", "Product Support"].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`btn ${
                    selectedOption === option ? "btn-primary" : "btn-outline-light"
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>

           <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-transparent text-white border-light"
                      id="first-name"
                      placeholder="First Name"
                    />
                    <label htmlFor="first-name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-transparent text-white border-light"
                      id="last-name"
                      placeholder="Last Name"
                    />
                    <label htmlFor="last-name">Last Name</label>
                  </div>
                </div>
              </div>

              <div className="form-floating mt-4">
                <input
                  type="email"
                  className="form-control bg-transparent text-white border-light"
                  id="email"
                  placeholder="name@email.com"
                />
                <label htmlFor="email">Your Email</label>
              </div>

              <div className="mt-4">
                <textarea
                  className="form-control bg-transparent text-white border-light"
                  id="message"
                  placeholder="Your Message"
                  style={{ height: "120px" }}
                ></textarea>
                <label htmlFor="message"></label> 
              </div>

              <button type="submit" className="btn btn-primary w-100 p-2 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
