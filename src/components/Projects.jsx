
import React from "react";
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="project-card">
        <img src="/BudgetBuddy.jpg" alt="Project 1" />
        <h2>Budget Buddy</h2>
        <p>Budgte Buddy allows users to track their finances and goals strictly to allow for accurate track and goal attaining.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/budget-tracker-team-5" className="github-button">GitHub</a>
          <a href="https://app-budget-buddy-17170e451f60.herokuapp.com/" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/PasswordGenerator.jpg" alt="Project 2" />
        <h2>Password Generator</h2>
        <p>Password Generator allows user sot creat unique and secure passwords instantly with mutliple options of customization. </p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/passwordGenerator" className="github-button">GitHub</a>
          <a href="https://henegarcodes.github.io/passwordGenerator/" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/WorkdayScheduler.jpg" alt="Project 3" />
        <h2>Workday Scheduler</h2>
        <p>Workday Scheduler allows you to note, and schedule out times during your day. It also uses Dayjs to allow for continous blockage of times throughout the day thatg have passed or are current.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/Workday-Scheduler" className="github-button">GitHub</a>
          <a href="https://henegarcodes.github.io/Workday-Scheduler/" className="deployed-button">Deployed</a>
        </div>
      </div>

      
      <div className="project-card">
        <img src="/JungleMap.jpg" alt="Project 4" />
        <h2>Jungle Map</h2>
        <p>Jungle Map is a NBA statistic app allowing users to get stats instantly for their favorite teams accompanied by a random gif of basketball on each click.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/jungle-map-api" className="github-button">GitHub</a>
          <a href="https://bkness.github.io/jungle-map-api/" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/WeatherApp.jpg" alt="Project 5" />
        <h2>5 Day Weather App</h2>
        <p>The weather app allows users to instantly see their selective city of choices weather via 5 day report using the Open Weather API.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/5-Day-Weather-App" className="github-button">GitHub</a>
          <a href="https://henegarcodes.github.io/5-Day-Weather-App/" className="deployed-button">Deployed</a>
        </div>
      </div>

      <div className="project-card">
        <img src="/RPS.jpg" alt="Project 6" />
        <h2>Rock, Paper, Scizzors</h2>
        <p>Rock, Paper, Scizzors is a javascript application that keeps score of the classic game between the user and computer. It uses a random picker generator to pick the computers choice.</p>
        <div className="project-buttons">
          <a href="https://github.com/HenegarCodes/RockPaperScissors" className="github-button">GitHub</a>
          <a href="https://henegarcodes.github.io/RockPaperScissors/" className="deployed-button">Deployed</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
