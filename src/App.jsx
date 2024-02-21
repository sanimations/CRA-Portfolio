import React from "react";
import { Image } from "react-bootstrap";
import "./App.css";
import { ReactComponent as LinkedInIcon } from "./assets/linkedin.svg";
import { ReactComponent as GitHubIcon } from "./assets/github.svg";
import { ReactComponent as YouTubeIcon } from "./assets/youtube.svg";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1 style={{ color: "#F0E68C" }}>Samuel Martucci</h1>
      </header>

      {/* Main Content */}
      <main>
        {/* Education */}
        <section id="education">
          <h2 style={{ color: "#66CDAA" }}>Education</h2>
          <div class="education-container">
            <div class="education-section">
              <h3 style={{ color: "#AA66CD" }}>
                Skills Learned at Bard College
              </h3>
              <p>
                Blender, 3dsMax, Adobe Premiere Pro, Adobe After Effects, Adobe
                Audition, Adobe Animate, Adobe Photoshop
              </p>
            </div>

            <div class="education-section">
              <h3 style={{ color: "#AA66CD" }}>
                Bachelor's Degree to Intro Certificate
              </h3>
              <p>
                I have received a <strong>Bachelor's Degree</strong> in Film/Electronic Arts at
                Bard College.  I completed CareerFoundry's Intro To
                Frontend course as well as the <strong>Full-Stack Immersion</strong> course.
                <br></br>
                <a
                  href="https://www.linkedin.com/posts/samuel-martucci-57710317b_im-happy-to-share-that-ive-completed-the-activity-7165461644385468416--k0o?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full-Stack Immersion Certificate
                </a>
                <br></br>
                <a
                  href="https://www.linkedin.com/posts/samuel-martucci-57710317b_im-happy-to-share-that-ive-completed-the-activity-7090117281665441792-Dsz2?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Intro Certificate
                </a>
              </p>
            </div>

            <div class="education-section">
              <h3 style={{ color: "#AA66CD" }}>
                Skills Learned at CareerFoundry
              </h3>
              <p>
                HTML, CSS, JavaScript, React.js, React Native, SQL, noSQL,
                Mongo, MongoDB, MongoDB Atlas, accessibility (ARIA), React
                Bootstrap, JQuery and Angular.
              </p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2 style={{ color: "#66CDAA" }}>Demo Projects</h2>

          {/* Project 1 */}
          <div className="projects-container">
            <div className="project">
              <h3 style={{ color: "#AA66CD" }}>MyFlix React</h3>
              <p></p>
              <a
                href="https://qfdb.netlify.app/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/myFlix-React.png")}
                  alt="Movie Database React"
                  className="img-effects"
                  rounded
                />
              </a>
              <p></p>
              <p>
                Using React, I built the client-side for an app called myFlix
                based on its existing server-side code. The server-side code
                came from a REST API and database I had created. In this project
                I used the MERN tech stack and I learned how to use
                Authentication with the accompanying API. For testing, you can
                use the login credentials 'Username' and 'Password' to access
                the application.
                <br></br>
                <a
                  href="https://qfdb.netlify.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyFlix React Webpage
                </a>
                <br></br>
                <a
                  href="https://github.com/sanimations/myFlix-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  MyFlix React Github{" "}
                </a>
              </p>
            </div>

            {/* Project 2 */}
            <div className="project">
              <h3 style={{ color: "#AA66CD" }}>HTML Portfolio</h3>
              <p></p>
              <a
                href="https://sanimations.github.io/portfolio-website/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/portfolio-html.png")}
                  alt="Portfolio HTML"
                  className="img-effects"
                  rounded
                />
              </a>
              <p></p>
              <p>
                This portfolio was my first coding assignment! I built a
                responsive portfolio website using HTML and CSS. I used a grid
                layout and coded an animation with an SVG image file. Finally, I
                uploaded this site to my github pages.
                <br></br>
                <a
                  href="https://sanimations.github.io/portfolio-website/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HTML Portfolio Webpage
                </a>
                <br></br>
                <a
                  href="https://github.com/sanimations/portfolio-website/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  HTML Portfolio Github{" "}
                </a>
              </p>
            </div>

            {/* Project 3 */}
            <div className="project">
              <h3 style={{ color: " #AA66CD " }}>Pokédex</h3>
              <p></p>
              <a
                href="https://sanimations.github.io/pokedex-js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/pokedex-js.png")}
                  alt="PokeDex Website"
                  className="img-effects"
                  rounded
                />
              </a>
              <p></p>
              <p>
                The objective of this project was to build a small web
                application with HTML, CSS, and JavaScript that loads data from
                an external API and enables the viewing of data points in
                detail. The project follows a structured approach with exercises
                covering JavaScript fundamentals, DOM interaction, API usage, UI
                enhancements, and deployment to platforms like GitHub Pages.
                <br></br>
                <a
                  href="https://sanimations.github.io/pokedex-js/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokédex Webpage
                </a>
                <br></br>
                <a
                  href="https://github.com/sanimations/pokedex-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokédex Github Repository
                </a>
              </p>
            </div>

            {/* Project 4 */}
            <div className="project">
              <h3 style={{ color: " #AA66CD " }}>Meet App</h3>
              <p></p>
              <a
                href="https://sanimations.github.io/meet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/MeetApp-js.png")}
                  alt="Meet App"
                  className="img-effects"
                  rounded
                />
              </a>
              <p></p>
              <p>
                My objective was to build a serverless, progressive web
                application (PWA) with React using a test-driven development
                (TDD) technique. The application uses the Google Calendar API to
                fetch upcoming events and used AWS Lambda functions to implement
                serverless technology. The application was deployed on my github
                pages.
                <br></br>
                <a
                  href="https://sanimations.github.io/meet/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MeetApp Webpage
                </a>
                <br></br>
                <a
                  href="https://github.com/sanimations/meet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MeetApp Github
                </a>
              </p>
            </div>

            {/* Project 5 */}
            <div className="project">
              <h3 style={{ color: " #AA66CD " }}>MyFlix Angular</h3>
              <p></p>
              <a
                href="https://sanimations.github.io/myFlixAngularClient/welcome"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/myFlix-Angular.png")}
                  alt="Movie Database Angular"
                  className="img-effects"
                  rounded
                />
              </a>
              <p></p>
              <p>
                Using Angular, I built the client-side for an app called myFlix
                based on its existing server-side code. The server-side code
                came from a REST API and database I had created. In this project
                I used the MEAN tech stack. This was my first time using
                Angular.
                <br></br>
                <a
                  href="https://sanimations.github.io/myFlixAngularClient/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyFlix Angular Webpage
                </a>
                <br></br>
                <a
                  href="https://github.com/sanimations/myFlixAngularClient"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyFlix Angular Github
                </a>
              </p>
            </div>

            {/* Project 6 */}
            <div className="project">
              <h3 style={{ color: " #AA66CD " }}>WalkinTalkin</h3>
              <p></p>
              <a
                href="https://github.com/sanimations/WalkinTalkin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/chatApp-reactNative.png")}
                  alt="Chat app"
                  className="img-effects"
                  rounded
                />
              </a>
              <p></p>
              <p>
                My objective was to build a chat app for mobile devices using
                React Native. The app will provide users with a chat interface
                and options to share images and their location. The data was
                stored with Google Firestore. I used GiftedChat to send messages
                and other data. The deployment environment was setup to work
                with React Native and Expo.
                <br></br>
                {/* <a href="placeholder" target="_blank" rel="noopener noreferrer">
                  ****Update Youtube demo
                </a>
                <br></br> */}
                <a
                  href="https://github.com/sanimations/WalkinTalkin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WalkinTalkin App Github
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Other Work Section */}
      <section id="other-work">
        <h2 style={{ color: "#66CDAA" }}>Other Work</h2>
        <p>
          I worked as a Freelance Animator for Edgeworx Studios, most notably on
          the first season of the Hulu Show called{" "}
          <a
            href="https://www.imdb.com/name/nm15804493/?ref_=ttfc_fc_cr"
            target="_blank"
            rel="noopener noreferrer"
          >
            "Wild Crime"
          </a>
          .<br></br>
          <br></br>I also worked on a music video for the band NephewCube on Youtube,
          Spotify, and Apple Music.
        </p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oIYrEnYwzGk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* About Me */}
      <section id="about-me">
        <h2 style={{ color: "#66CDAA" }}>About Me</h2>
        <p>
          Hey there! I'm Sam Martucci, a native of New Jersey with a passion for
          technology and gaming. With a background in Film/Electronic Arts and a
          knack for server management, I've honed my skills in both creative and
          technical realms. When I'm not diving into code or managing my Discord
          server, you'll often find me immersed in the latest gaming adventures.
          As a natural communicator and eager learner, I thrive on sharing
          knowledge and collaborating on projects. Let's connect and explore the
          exciting possibilities together!
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>
          &copy; 2024 Sam Martucci. All rights reserved. <br></br>
          <br></br>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/samuel-martucci-57710317b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/sanimations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.youtube.com/channel/UCfKFgsb5dS48GaJAndlqRcA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </a>
          </div>
        </p>
      </footer>
    </div>
  );
}

export default App;
