// Projects.jsx
import React from "react";
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="project-card">
        <img src="project-image-1.jpg" alt="Project 1" />
        <h2>Project 1 Title</h2>
        <p>Short description of Project 1.</p>
        <div className="project-buttons">
          <a href="github-link-1" className="github-button">GitHub</a>
          <a href="deployed-link-1" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="project-image-2.jpg" alt="Project 2" />
        <h2>Project 2 Title</h2>
        <p>Short description of Project 2.</p>
        <div className="project-buttons">
          <a href="github-link-2" className="github-button">GitHub</a>
          <a href="deployed-link-2" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="project-image-3.jpg" alt="Project 3" />
        <h2>Project 3 Title</h2>
        <p>Short description of Project 3.</p>
        <div className="project-buttons">
          <a href="github-link-3" className="github-button">GitHub</a>
          <a href="deployed-link-3" className="deployed-button">Deployed</a>
        </div>
      </div>

      
      <div className="project-card">
        <img src="project-image-4.jpg" alt="Project 4" />
        <h2>Project 4 Title</h2>
        <p>Short description of Project 4.</p>
        <div className="project-buttons">
          <a href="github-link-4" className="github-button">GitHub</a>
          <a href="deployed-link-4" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="project-image-5.jpg" alt="Project 5" />
        <h2>Project 5 Title</h2>
        <p>Short description of Project 5.</p>
        <div className="project-buttons">
          <a href="github-link-5" className="github-button">GitHub</a>
          <a href="deployed-link-5" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="project-image-6.jpg" alt="Project 6" />
        <h2>Project 6 Title</h2>
        <p>Short description of Project 6.</p>
        <div className="project-buttons">
          <a href="github-link-6" className="github-button">GitHub</a>
          <a href="deployed-link-6" className="deployed-button">Deployed</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
