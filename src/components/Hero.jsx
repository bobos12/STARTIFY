import Beams from './background/bg';

export default function Hero({ onCTAClick }) {
  return (
    <section
      className="bg-custom-dark text-white position-relative overflow-hidden min-vh-100 d-flex justify-content-center align-items-center text-center"
      id="home"
    >
      <div className="hero-bg">
        <Beams />
      </div>

      <div className="container p-4 p-md-5 hero-content">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8" data-aos="fade-up">
            {/* Responsive Heading */}
            <h1 className="fw-bold mb-4 mt-n2 display-5 display-md-4 display-lg-3">
              Empower Your Startup with Style
            </h1>

            {/* Responsive Subheading */}
            <p className="lead mb-4 fs-5 fs-md-4 fs-lg-3">
              Launch faster and scale smarter with a sleek, responsive design.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <button
                className="btn btn-modern btn-light text-black px-4 py-2"
                style={{ borderRadius: "0" }}
                onClick={onCTAClick}
              >
                Get Started
              </button>
              <a
                href="#features"
                className="btn btn-modern btn-outline-light px-4 py-2"
                style={{ borderRadius: "0" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
