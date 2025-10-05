import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>CONTACTS</h2>
      <div className="contact-flex">
        {/* Left: Get In Touch */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p><i className="fas fa-envelope"></i> iradukundanice61@gmail.com</p>
          <p><i className="fas fa-phone"></i> +250 7888747861</p>
          <p><i className="fas fa-map-marker-alt"></i> Kigali, Rwanda</p>
        </div>

        {/* Center: Social Profiles */}
        <div className="social-profiles">
          <h3>Social Profiles</h3>
          <a href="https://wa.me/2507888747861" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-whatsapp"></i> WhatsApp</a>
          <a href="https://www.instagram.com/_ja.ni.ce__/" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-instagram"></i> Instagram</a>
          <a href="https://www.linkedin.com/in/nice-iradukunda-192036353/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>

        {/* Right: Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <a href="#home"><i className="fas fa-home"></i> Home</a>
          <a href="#projects"><i className="fas fa-code"></i> Projects</a>
          <a href="#skills"><i className="fas fa-laptop-code"></i> Skills</a>
          <a href="#contact"><i className="fas fa-envelope"></i> Contact</a>
        </div>
      </div>

      <p className="collab">Available for collaborations and exciting projects—get in touch!</p>
    </section>
  );
};

export default Contact;
