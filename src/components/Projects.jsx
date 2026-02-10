import React from "react";
import "../style.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Chaste Essentials",
      description: "A full-stack e-commerce web application for online shopping.",
      image: "/images/chaste.jpeg",
      category: "Web Application",
      link: "https://chaste-essentialss.vercel.app/",
      github: "https://github.com/Nice-91/Chaste-essentialss",
    },
    {
      id: 2,
      title: "Sky Sense",
      description:
        "A responsive weather app showing real-time weather and forecasts.",
      image: "/images/weather.jpeg",
      category: "Weather App",
      link: "https://skysense-weatherapp.vercel.app/",
      github: " https://github.com/Nice-91/skysense_weatherapp/",
    },
    {
      id: 3,
      title: "Artwork",
      description:
        "A full-stack web application for showcasing creative projects and managing quote requests.",
      image: "/images/artwork.jpeg",
      category: "Creative Platform",
      link: "https://artwork-dun.vercel.app/",
      github: "https://github.com/Nice-91/Artwork/ ",
    },
  ];

  return (
    <section className="projects-modern-section" id="projects">
      <div className="projects-modern-container">
        {/* Header */}
        <div className="projects-modern-header">
        
          <h2 className="projects-modern-title">
            My Recent <span className="highlight-gold">Projects</span>
          </h2>
          <p className="projects-modern-subtitle">
            Explore some of my latest work showcasing creativity and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-modern-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-modern-card"
              data-index={index}
            >
              {/* Image */}
              <div className="project-modern-image">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Content */}
              <div className="project-modern-content">
                <h3 className="project-modern-title">{project.title}</h3>
                <p className="project-modern-desc">{project.description}</p>

                <p className="project-category">{project.category}</p>

                {/* Buttons */}
                <div className="project-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn live-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn github-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
