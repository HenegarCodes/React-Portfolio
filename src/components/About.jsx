import React from 'react'
import './about.css'


const About = () => {
    return (
        <div className="container">
        <div className="about-section">
          <h2>About Me</h2>
          <img src="your-profile-picture.jpg" alt="Profile Picture" className="profile-picture" />
        </div>
        <div className="content-section">
          <p>
            Hello! 👋 I'm Spencer Henegar, a passionate and motivated software developer on the verge of completing an intensive bootcamp journey. Set to receive my certificate in February, I've delved into the dynamic world of full-stack engineering.
          </p>
          <p>
            <strong>Skills Snapshot:</strong><br />
            - Frontend: Proficient in crafting engaging user interfaces using HTML, CSS, and JavaScript.<br />
            - Frameworks: Experienced in leveraging the power of React.js for building dynamic and responsive web applications.<br />
            - Backend: Well-versed in server-side development with Express.js, connecting the dots and ensuring seamless functionality.<br />
            - Databases: Comfortable working with both NoSQL databases for flexibility and MySQL for robust relational data management.<br />
            - Deployment & Version Control: Experienced in deploying applications on platforms like Heroku and managing version control with Git/GitHub.
          </p>
          <p>
            I thrive on challenges, and my journey has equipped me with the versatility to tackle a spectrum of technologies and tools. Whether it's front-end aesthetics or back-end functionality, I find joy in creating robust and user-friendly applications.
          </p>
          <p>
            <strong>Let's Code Together! 🚀</strong>
          </p>
        </div>
      </div>
    );
  };
  
  export default About;