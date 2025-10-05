import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>PROJECTS</h2>
      <div className="projects-container">
        <a href="https://greenbite-eight.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
          <img src="/images/greenbite.jpeg" alt="Green Bite" />
          <h3>Green Bite</h3>
          <p>A responsive HTML/CSS web app showcasing a healthy food brand.</p>
        </a>

        <a href="https://skysense-weatherapp.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
          <img src="/images/weather.jpeg" alt="Weather App" />
          <h3>Sky Sense</h3>
          <p>A responsive Weather App showing real-time weather and forecasts.</p>
        </a>

        <a href="https://movie-orcin-psi.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
      <img src="/images/movie.jpeg" alt="Movie App" />
      <h3>Movie App</h3>
      <p>A movie app where users search movies, view details and rate movies.</p>
    </a>

        <a href="https://agriprice-info-site.vercel.app/" target="_blank" rel="noreferrer" className="project-card">
          <img src="/images/agriprice.jpeg" alt="AgriPrice" />
          <h3>AgriPrice</h3>
          <p>A full-stack website for connecting buyers and sellers easily.</p>
        </a>
      </div>
    </section>
  );
};

export default Projects;
