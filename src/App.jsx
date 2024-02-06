import React from "react";
import { Image } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1 style={{ color: '#00FFFF'}} >Samuel Martucci</h1>
      </header>

      {/* Main Content */}
      <main>
        <section id="projects">
          <h2 style={{ color: '#FF69B4'}}>Projects</h2>

          <div className="projects-container">
      
            <div className="project">
              <h3 style={{ color: '#FFA500'}}>MyFlix React</h3>
              <p></p>
              <a
                href="https://github.com/sanimations/myFlix-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/myFlix-React.png")}
                  alt="Movie Database React"
                  rounded
                />
              </a>
              <p></p>
              <p>
                Created a Meet App to find interesting events around the world.
              </p>
            </div>

            <div className="project">
              <h3 style={{ color: '#FFA500'}}>MyFlix Angular</h3>
              <p></p>
              <a
                href="https://github.com/sanimations/myFlixAngularClient"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/myFlix-Angular.png")}
                  alt="Movie Database Angular"
                  rounded
                />
              </a>
              <p></p>
              <p>
                My queer movie database created with Angular.
              </p>
            </div>

            <div className="project">
              <h3 style={{ color: '#FFA500'}}>WalkinTalkin</h3>
              <p></p>
              <a
                href="https://github.com/sanimations/WalkinTalkin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/chatApp-reactNative.png")}
                  alt="Chat app"
                  rounded
                />
              </a>
              <p></p>
              <p>
                This is a chat app I created with React Native!  A mobile native app with chat, image, and location sharing.
              </p>
            </div>

            <div className="project">
              <h3 style={{ color: '#FFA500'}} >Meet App</h3>
              <p></p>
              <a
                href="https://sanimations.github.io/meet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/MeetApp-js.png")}
                  alt="Meet App"
                  rounded
                />
              </a>
              <p></p>
              <p>
                Created a Meet App to find interesting events around the world.
              </p>
            </div>

            <div className="project">
              <h3 style={{ color: '#FFA500'}} >HTML Portfolio</h3>
              <p></p>
              <a
                href="https://sanimations.github.io/portfolio-website/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/portfolio-html.png")}
                  alt="Portfolio HTML"
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

            <div className="project">
              <h3 style={{ color: '#FFA500'}}>PokeDex</h3>
              <p></p>
              <a
                href="https://sanimations.github.io/pokedex-js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require("./assets/pokedex-js.png")}
                  alt="PokeDex Website"
                  rounded
                />
              </a>
              <p></p>
              <p>Created a personal pokedex linking to the pokemon API.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Other Work Section */}
      <section id="other-work">
        <h2 style={{ color: '#FF69B4'}} >Other Work</h2>
        <p>
          I worked as a Freelance Animator for Edgeworx Studios, most notably on the first season of the Hulu Show called "Wild Crime".
          <br></br>I also worked on a music video for the band NephewCube on Spotify.  Here is the <a href="https://www.youtube.com/watch?v=oIYrEnYwzGk"
                target="_blank" rel="noopener noreferrer">link</a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
