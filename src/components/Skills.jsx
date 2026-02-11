import React from "react";
import "../style.css";

const Skills = () => {
  const technicalSkills = [
    "HTML, CSS, Javascript",
    "Python, Django, Django Rest Framework",
   
    "React.js, Responsive Design",
    "REST APIs, JSON",
    "DOM Manipulation, Local Storage",
    "JWT Authentication",
    "SQLite, PostgreSQL",
    "Git , GitHub",
    "Basic UI/UX design principles",
    "Computer Science Fundamentals: Data Structures, Algorithms, Algorithmic Thinking, Object-Oriented Programming (OOP), Software Design Patterns",

    
  ];

  const tools = [
    "Visual Studio Code",
    "Render",
    "Vercel",
    "Postman",
    "Docker (basics)",
    "GitHub Actions (CI/CD)",
    "Google Meet",
    "Zoom",
    "Figma",
  ];

  const softSkills = [
    "Self-motivated learner",
    "Strong problem-solving skills",
    "Attention to detail",
    " Effective communication",
    "collaboration",
    "Adaptability",
    "continuous improvement ",
    "Lifelong Learning",
  ];

  const SkillCard = ({ title, skills }) => (
    <div className="skill-card">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-container">
        <SkillCard title="Technical Skills" skills={technicalSkills} />
        <SkillCard title="Tools & Platforms" skills={tools} />
        <SkillCard title="Soft Skills" skills={softSkills} />
      </div>
    </section>
  );
};

export default Skills;
