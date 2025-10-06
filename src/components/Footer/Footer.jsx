import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-4 ">
      <div className="container">
        {/* Top CTA Section */}
        <div className="subscribe-section text-center mb-5">
          <h3 className="fw-bold mb-3">Join the Startify Revolution </h3>
          <p className="text-white-50 mb-4">
            Be the first to get our latest tools, offers, and startup tips.
            Subscribe now and start building your success story with <strong>Startify</strong>.
          </p>

          <form className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
            <input
              type="email"
              className="form-control w-auto px-3 py-2 rounded-0"
              placeholder="Enter your email"
            />
            <button type="submit" className="btn btn-primary rounded-0 px-4 fw-semibold">
              Subscribe
            </button>
          </form>
        </div>

        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-md-4 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <img
                src="https://i.pinimg.com/1200x/6a/9c/4b/6a9c4b8235f8b052c3940fd98e2895ec.jpg"
                alt="Startify Logo"
                className="footer-logo me-2"
              />
              <h4 className="fw-bold mb-0">Startify</h4>
            </div>
            <p className="text-white-50">
              Empowering startups with stunning design and smart digital tools to grow faster.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 text-center text-md-start">
            <h6 className="fw-semibold mb-3 text-uppercase">Explore</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-2 text-center text-md-start">
            <h6 className="fw-semibold mb-3 text-uppercase">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">FAQs</a></li>
              <li><a href="#" className="footer-link">Support</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 text-center text-md-md-end">
            <h6 className="fw-semibold mb-3 text-uppercase">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end flex-wrap gap-3">
              <a href="#" className="social-icon twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon linkedin"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="social-icon instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon youtube"><i className="bi bi-youtube"></i></a>
              <a href="#" className="social-icon github"><i className="bi bi-github"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="text-center text-white-50 small">
          &copy; {new Date().getFullYear()} <strong>Startify</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
