// src/App.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Featuerd/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/Faq/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop";
import Modal from "./components/Modal";
import LogoLoop from "./components/logoLoop/LogoLoop";

function App() {
  const [modalInfo, setModalInfo] = useState({ show: false, plan: null });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  const openPlanModal = (plan) => setModalInfo({ show: true, plan });
  const closeModal = () => setModalInfo({ show: false, plan: null });

  return (
    <>
      <Navbar />
      <Hero onCTAClick={() => document.getElementById("pricing").scrollIntoView({ behavior: "smooth" })} />
      <LogoLoop />
      <main>
        <section id="features" className="section container"><Features /></section>
  <section id="pricing" className="section bg-custom-dark"><div className="container"><Pricing onBuy={openPlanModal} /></div></section>
  <section id="testimonials" className="section bg-custom-dark container"><Testimonials/></section>
  <section id="faq" className="section bg-custom-dark container"><FAQ /></section>
  <section id="contact" className="section bg-custom-dark container"><Contact /></section>
      </main>

      <Footer />
      <ScrollTop />
      <Modal show={modalInfo.show} onClose={closeModal} title={modalInfo?.plan?.name}>
        <div>
          <p>You're requesting <strong>{modalInfo?.plan?.name}</strong>.</p>
          <p>Price: {modalInfo?.plan?.price}</p>
          <button className="btn btn-primary" onClick={() => { alert("Pretend purchase success!"); closeModal(); }}>Confirm</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
