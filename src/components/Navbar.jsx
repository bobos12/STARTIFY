import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["Features", "#features"],
    ["Pricing", "#pricing"],
    ["Testimonials", "#testimonials"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top py-3" style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(0,0,0,0.7)" }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#home">Startify</a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map(([label, href]) => (
              <li className="nav-item" key={label}>
                <a 
                  className="nav-link text-white px-3" 
                  href={href} 
                  onClick={() => setOpen(false)}
                  style={{ transition: "0.3s", borderRadius: "4px" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
