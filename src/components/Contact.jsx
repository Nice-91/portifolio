import React from "react";
import "../style.css";


const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
       
        <h2 className="contact-main-title">CONTACTS</h2>

        
        <div className="contact-grid">
          
          
          <div className="contact-column">
            <h3 className="contact-column-title">Get In Touch</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:iradukundanice61@gmail.com">iradukundanice61@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+250788747861">+250 7888747861</a>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          
          <div className="contact-column">
            <h3 className="contact-column-title">Social Profiles</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/250788747861" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
              <div className="contact-info-item">
                <i className="fab fa-instagram"></i>
                <a href="https://www.instagram.com/nice_ira_/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
              <div className="contact-info-item">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/nice-iradukunda-192036353/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="contact-column">
            <h3 className="contact-column-title">Quick Links</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <i className="fas fa-home"></i>
                <a href="#home">Home</a>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-code"></i>
                <a href="#projects">Projects</a>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-laptop-code"></i>
                <a href="#skills">Skills</a>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>

        </div>

       
        <div className="contact-cta">
          <p>Available for collaborations and exciting projects—get in touch!</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;