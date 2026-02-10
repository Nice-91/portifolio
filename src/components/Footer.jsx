import React from "react";
import "../style.css";

const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="footer-new-container">
        <p>© {new Date().getFullYear()} Nice Iradukunda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;