import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(".testimonial-card");
    if (!card) return;

    const cardWidth = card.clientWidth + 32; // card width + gap (2rem)
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const authors = [
  {
    name: "Leslie Alexander",
    role: "Freelance React Developer",
    img: "https://i.pinimg.com/1200x/e6/8f/53/e68f53567f79425eae6ae9035de5221f.jpg",
    text:
      "You made it so simple. My new site is so much faster and easier to work with than my old one.",
  },
  {
    name: "Jacob Jones",
    role: "Digital Marketer",
    img: "https://i.pinimg.com/736x/e1/4a/83/e14a8371f954ca9c153ba39cb4af9b87.jpg",
    text:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
  },
  {
    name: "Jenny Wilson",
    role: "Graphic Designer",
    img: "https://i.pinimg.com/736x/8b/f5/d1/8bf5d1a4304a2a7f9f04389a79606942.jpg",
    text:
      "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
  },
  {
    name: "Michael Smith",
    role: "Product Manager",
    img: "https://i.pinimg.com/736x/6c/52/f4/6c52f416b7181346eabbaf2c76711ee5.jpg",
    text:
      "Amazing work! The support team helped me fix an issue in minutes. Definitely recommend for modern websites.",
  },
  {
    name: "Sophia Martinez",
    role: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
    text:
      "Incredible experience! The interface is clean, and the design feels premium. It really helped my business grow.",
  },
  {
    name: "Daniel Lee",
    role: "Software Engineer",
    img: "https://i.pinimg.com/736x/7e/83/0e/7e830e9c49dee63d546ba2b376523d30.jpg",
    text:
      "I’ve tried many platforms, but this one stands out. Smooth performance and a wonderful user experience.",
  },
];


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

          {/* Left Scroll Button */}
          <button
            className="scroll-btn left"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <FaArrowLeft />
          </button>

          {/* Scrollable Testimonials */}
          <div className="testimonials-grid" ref={scrollRef}>
            {authors.map((author, index) => (
              <div className="testimonial-card" key={index}>
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
                    <p>“{author.text}”</p>
                  </blockquote>

                  <div className="testimonial-author">
                    <img
                      src={author.img}
                      alt={author.name}
                    />
                    <div>
                      <h4>{author.name}</h4>
                      <span>{author.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            className="scroll-btn right"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
