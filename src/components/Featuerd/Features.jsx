import React, { useState, useRef, useEffect } from "react";
import {
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaUsers,
  FaCloud,
  FaMobileAlt,
  FaCogs,
  FaBolt,
  FaLock,
  FaChartLine,
  FaGlobe,
  FaMagic,
  FaDatabase,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";

const features = [
  { icon: <FaRocket size={30} color="#38bdf8" />, title: "Fast Performance", description: "Optimized for speed and smooth rendering across all devices." },
  { icon: <FaShieldAlt size={30} color="#38bdf8" />, title: "Secure by Design", description: "Data protection and encryption at every layer of development." },
  { icon: <FaCode size={30} color="#38bdf8" />, title: "Modern Stack", description: "Built with React, Node.js, and Next.js for high scalability." },
  { icon: <FaUsers size={30} color="#38bdf8" />, title: "User Friendly", description: "An intuitive interface designed for seamless interaction." },
  { icon: <FaCloud size={30} color="#38bdf8" />, title: "Cloud Powered", description: "Access your data and tools anywhere, anytime with cloud hosting." },
  { icon: <FaMobileAlt size={30} color="#38bdf8" />, title: "Responsive Design", description: "Fully responsive — works perfectly on mobile, tablet, and desktop." },
  { icon: <FaCogs size={30} color="#38bdf8" />, title: "Customizable", description: "Easily adaptable and extendable to match your unique needs." },
  { icon: <FaBolt size={30} color="#38bdf8" />, title: "Real-Time Updates", description: "Instant synchronization and live updates without refreshing." },
  { icon: <FaLock size={30} color="#38bdf8" />, title: "Privacy First", description: "We never share or sell your data — your privacy is guaranteed." },
  { icon: <FaChartLine size={30} color="#38bdf8" />, title: "Analytics & Insights", description: "Track performance and usage with integrated analytics tools." },
  { icon: <FaGlobe size={30} color="#38bdf8" />, title: "Global Reach", description: "Deployed with worldwide CDN for faster delivery everywhere." },
  { icon: <FaMagic size={30} color="#38bdf8" />, title: "AI Enhanced", description: "Powered by AI features to automate and personalize user experience." },
  { icon: <FaDatabase size={30} color="#38bdf8" />, title: "Reliable Storage", description: "Your data is safe and backed up with redundancy." },
  { icon: <FaHandshake size={30} color="#38bdf8" />, title: "Collaboration", description: "Work together with your team effortlessly." },
  { icon: <FaHeadset size={30} color="#38bdf8" />, title: "24/7 Support", description: "Our support team is available around the clock." },
];

export default function Features() {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.maxHeight = expanded
        ? `${containerRef.current.scrollHeight}px`
        : `${containerRef.current.scrollHeight / 2.5}px`; // show about 6 cards
    }
  }, [expanded]);

  return (
    <section
      style={{
        color: "#fff",
        padding: "4rem 2rem 3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        Our Features
      </h2>

      {/* Cards Grid */}
      <div
        ref={containerRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "3rem",
          width: "100%",
          maxWidth: "1100px",
          overflow: "hidden",
          transition: "max-height 0.7s ease-in-out",
        }}
      >
        {features.map((feature, index) => {
          const visible = expanded || index < 6;
          return (
            <div
              key={index}
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            >
              <SpotlightCard spotlightColor="rgba(56, 189, 248, 0.25)">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1rem",
                  }}
                >
                  <div>{feature.icon}</div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: "#ccc", lineHeight: "1.6" }}>
                    {feature.description}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          marginTop: "2.5rem",
          backgroundColor: "#38bdf8",
          color: "#fff",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
          fontWeight: "600",
          transition: "background-color 0.3s ease, transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        {expanded ? "Show Less ▲" : "Show More ▼"}
      </button>
    </section>
  );
}
