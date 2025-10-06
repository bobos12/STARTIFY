import React from "react";
import "./pricing.css"; // custom CSS file

const plans = [
  {
    title: "Starter",
    price: "$9",
    description: "Perfect for small teams starting out.",
    features: ["1 Project", "Email Support", "Basic Analytics"],
    icon: "bi-lightning-charge",
  },
  {
    title: "Pro",
    price: "$29",
    description: "For growing businesses with more needs.",
    features: ["5 Projects", "Priority Support", "Advanced Analytics"],
    icon: "bi-layers",
  },
  {
    title: "Enterprise",
    price: "$99",
    description: "Custom solutions for large organizations.",
    features: ["Unlimited Projects", "Dedicated Manager", "Custom Reports"],
    icon: "bi-globe",
  },
];

export default function Pricing() {
  return (
    <section className="py-5 text-white" data-aos="fade-up" data-aos-duration="1000">
      <div className="container text-center">
        {/* Header */}
        <div className="mb-5">
          <p className="fw-bold text-white fs-4 text-uppercase ">Pricing</p>
          <h2 className="fw-bold display-6">Simple, Transparent Pricing</h2>
          <p className="text-light fs-5">
            We believe our platform should be accessible to all companies — no matter the size.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="row justify-content-center g-4">
          {plans.map((plan, index) => (
          <div className={`col-md-6 col-xl-4 ${plan.title === "Pro" ? "featured-plan" : ""}`} key={index}>
            <div className="card h-100 border border- shadow-lg bg-black text-white">
                <div className="card-body p-4">
                  <div className="text-center mb-3">
                    <i className={`bi ${plan.icon} fs-1 text-primary`}></i>
                  </div>
                  <h4 className="card-title fw-bold">{plan.title}</h4>
                  <h3 className="text-primary fw-bold mb-2">{plan.price}/mo</h3>
                  <p className="text">{plan.description}</p>

                  <ul className="list-unstyled mt-3 mb-4 text-start">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="d-grid">
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

