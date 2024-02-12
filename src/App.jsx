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
          <p>
            Completed CareerFoundry's Intro To Frontend course as well as the
            Full-Stack Immersion course.<br></br>
            Recieved a Degree in Film/Electronic Arts at Bard College.<br></br>I
            have now learned and used HTML, CSS, JavaScript, React.js, React
            Native, and Angular.<br></br>
            Blender, 3dsMax, Adobe Premiere Pro, Adobe After Effects, Adobe
            Audtion, Adobe Animate
          </p>
        </section>

        <section id="projects">
          <h2 style={{ color: "#66CDAA" }}>Demo Projects</h2>

          {/* Project 1 */}
          <div className="projects-container">
            <div className="project">
              <h3 style={{ color: "#AA66CD" }}>MyFlix React</h3>
              <p></p>
              <a
                href="https://github.com/sanimations/myFlix-client"
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
                Created a Meet App to find interesting events around the world. 
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
                This was the first ever Portfolio I made using HTML, CSS, and
                JS. I also made working buttons and links that lead to other
                pages
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
              <p>Created a personal pokedex linking to the pokemon API.</p>
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
                Created a Meet App to find interesting events around the world.
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
              <p>My queer movie database created with Angular.</p>
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
                This is a chat app I created with React Native! A mobile native
                app with chat, image, and location sharing.
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
          the first season of the Hulu Show called "Wild Crime".
          <br></br>I also worked on a music video for the band NephewCube on
          Spotify. Here is the{" "}
          <a
            href="https://www.youtube.com/watch?v=oIYrEnYwzGk"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          {/* Imbed the links for my youtube and possibly an IMDB page or something */}
        </p>
      </section>

      {/* About Me */}
      <section id="about-me">
        <h2 style={{ color: "#66CDAA" }}>About Me</h2>
        <p>
          New Jersey born and raised. Avid gamer. Discord Server Configuration
          Management. Easy to teach, great communicator, and responsible worker.
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
