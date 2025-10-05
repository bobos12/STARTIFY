import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <p>2,157 people have said how good Rareblocks</p>
          <h2>Our happy clients say about us</h2>
        </div>

        <div className="testimonials-link">
          <a href="#">Check all 2,157 reviews</a>
        </div>

        <div className="testimonials-wrapper">
          <div className="testimonials-bg"></div>

          <div className="testimonials-grid">
            {/* Card 1 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote>
                  <p>
                    “You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change.”
                  </p>
                </blockquote>

                <div className="testimonial-author">
                  <img
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                    alt="Leslie Alexander"
                  />
                  <div>
                    <h4>Leslie Alexander</h4>
                    <span>Freelance React Developer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote>
                  <p>
                    “Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.”
                  </p>
                </blockquote>

                <div className="testimonial-author">
                  <img
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                    alt="Jacob Jones"
                  />
                  <div>
                    <h4>Jacob Jones</h4>
                    <span>Digital Marketer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote>
                  <p>
                    “I cannot believe that I have got a brand new landing page
                    after getting Omega. It was super easy to edit and publish.”
                  </p>
                </blockquote>

                <div className="testimonial-author">
                  <img
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                    alt="Jenny Wilson"
                  />
                  <div>
                    <h4>Jenny Wilson</h4>
                    <span>Graphic Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
