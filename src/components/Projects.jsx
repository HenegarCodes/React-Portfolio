
import React from "react";
import './projects.css';

const Projects = () => {
  return (
    <div className="projects-section" id="Projects">

<div className="project-card">
<img src="/FF.jpg" alt="Project 6" />
        <h2>Freight Flow</h2>
        <p>Freight Flow is a routing and trip-planning application designed specifically for freight trucks.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/Freight-Flow" className="github-button">GitHub</a>
          <a href="https://freight-flow.onrender.com/" className="deployed-button">Deployed</a>
        </div>
        </div>

<div className="project-card">
        <img src="/vgh.jpg" alt="Project 2" />
        <h2>Video Game Hub</h2>
        <p>
          Video Game Hub connects you with friends and other gamers. Join now to explore your new favorite game hub. </p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/video-game-hub" className="github-button">GitHub</a>
          <a href="https://video-game-hub.onrender.com/" className="deployed-button">Deployed</a>
        </div>
      </div>
      <div className="project-card">
        <img src="/BudgetBuddy.jpg" alt="Project 1" />
        <h2>Budget Buddy</h2>
        <p>
          Budget Buddy empowers users to seamlessly track their finances and pursue their goals with precision. Unleash the power of accurate tracking for achieving your financial milestones.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/budget-tracker-team-5" className="github-button">GitHub</a>
          <a href="https://app-budget-buddy-17170e451f60.herokuapp.com/" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/WorkdayScheduler.jpg" alt="Project 3" />
        <h2>Workday Scheduler</h2>
        <p>
          Workday Scheduler allows you to easily note and schedule your daily tasks. Using Dayjs, it ensures continuous visualization of past and current time blocks for a seamless scheduling experience.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/Workday-Scheduler" className="github-button">GitHub</a>
          <a href="https://henegarcodes.github.io/Workday-Scheduler/" className="deployed-button">Deployed</a>
        </div>
      </div>


      <div className="project-card">
        <img src="/JungleMap.jpg" alt="Project 4" />
        <h2>Jungle Map</h2>
        <p>Jungle Map stands as your go-to NBA statistics app, delivering instant stats for your favorite teams. Enjoy the added flair of a random basketball gif with every click.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/jungle-map-api" className="github-button">GitHub</a>
          <a href="https://bkness.github.io/jungle-map-api/" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/WeatherApp.jpg" alt="Project 5" />
        <h2>5 Day Weather App</h2>
        <p>The Weather App offers users an immediate glimpse into the weather of their chosen city through a 5-day forecast using the Open Weather API.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/5-Day-Weather-App" className="github-button">GitHub</a>
          <a href="https://henegarcodes.github.io/5-Day-Weather-App/" className="deployed-button">Deployed</a>
        </div>
      </div>

     
    </div>
  );
};

export default Projects;
