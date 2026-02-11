import React from "react";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="intro">
          <h1>Hi, I’m <span>Nice IRADUKUNDA</span></h1>
          <p>
          
          I’m a <strong>Full-Stack Developer</strong> who has built real <br /> applications from scratch using modern web <br />technologies. Strong ability to learn fast, break <br /> down  complex problems, and deliver working <br /> solutions. Seeking a first industry opportunity to <br />make a meaningful impact while continuing to <br /> level up technical skills.

            
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn"><i className="fas fa-eye"></i> View My Work</a>
            <a href="https://github.com/Nice-91" target="_blank" rel="noreferrer" className="btn"><i className="fab fa-github"></i> GitHub</a>
            {/* <a href="/Nice_CV.pdf" download className="btn cv-btn"> */}
            <a
  href="/assets/Nice-Iradukunda-cv (2).pdf"
  download
  className="btn cv-btn"
>
  <i className="fas fa-file-download"></i> Download cv
</a>




            <a href="https://www.linkedin.com/in/nice-iradukunda-192036353/" target="_blank" rel="noreferrer" className="btn"><i className="fab fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>

        <div className="photo">
          <img src="/images/WhatsApp Image 2025-10-03 at 3.30.04 PM (1).jpeg" alt="Nice" />
        </div>
      </div>
    </section>
  );
};

export default Home;
