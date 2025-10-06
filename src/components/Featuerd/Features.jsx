import {
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaUsers,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import "./Features.css";

const features = [
  { icon: <FaRocket size={30} color="#38bdf8" />, title: "Fast Performance", description: "Optimized for speed and smooth rendering across all devices." },
  { icon: <FaShieldAlt size={30} color="#38bdf8" />, title: "Secure by Design", description: "Data protection and encryption at every layer of development." },
  { icon: <FaCode size={30} color="#38bdf8" />, title: "Modern Stack", description: "Built with React, Node.js, and Next.js for high scalability." },
  { icon: <FaUsers size={30} color="#38bdf8" />, title: "User Friendly", description: "An intuitive interface designed for seamless interaction." },
  { icon: <FaCloud size={30} color="#38bdf8" />, title: "Cloud Powered", description: "Access your data and tools anywhere, anytime with cloud hosting." },
  { icon: <FaMobileAlt size={30} color="#38bdf8" />, title: "Responsive Design", description: "Fully responsive — works perfectly on mobile, tablet, and desktop." },
];

export default function Features() {
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

      {/* Responsive Grid */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <SpotlightCard
            key={index}
            spotlightColor="rgba(56, 189, 248, 0.25)"
          >
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
        ))}
      </div>
    </section>
  );
}
