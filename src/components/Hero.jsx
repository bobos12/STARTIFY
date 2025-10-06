import Beams from './background/bg';
import landingImage from '../assets/landing.png'; // ✅ Make sure this path is correct

export default function Hero({ onCTAClick }) {
  return (
    <section
      className="bg-custom-dark text-white position-relative overflow-hidden min-vh-100 d-flex align-items-center"
      id="home"
    >
      {/* Background */}
      <div className="hero-bg">
        <Beams />
      </div>

      {/* Hero Content */}
      <div className="container p-4 p-md-5 hero-content">
        <div className="row align-items-center">

          {/* Left Side: Text */}
          <div
            className="col-12 col-lg-6 text-start"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="fw-bold mb-4 display-5 display-md-4 display-lg-3">
              Empower Your Startup with Style
            </h1>

            <p className="lead mb-5 fs-5 fs-md-4 fs-lg-3 text-light opacity-75">
              Launch faster and scale smarter with a sleek, responsive design.
            </p>

            <div className="d-flex flex-column flex-sm-row justify-content-start gap-3 mt-4">
              <button
                className="btn btn-modern btn-light text-black px-4 py-2 no-transform"
                style={{
                  borderRadius: "0",
                  transition: "all 0.3s ease",
                }}
                onClick={onCTAClick}
              >
                Get Started
              </button>

              <a
                href="#features"
                className="btn btn-modern btn-outline-light px-4 py-2 no-transform"
                style={{
                  borderRadius: "0",
                  transition: "all 0.3s ease",
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div
            className="col-12 col-lg-6 d-flex justify-content-center mt-5 mt-lg-0"
          >
            <img
              src={landingImage}
              alt="Landing Illustration"
              style={{
                width: '100%',
                maxWidth: '700px',
                height: 'auto',
                filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.2))',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
