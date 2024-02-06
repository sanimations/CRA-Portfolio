import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>Samuel Martucci</h1>
      </header>

      {/* Main Content */}
      <main>
        <section id="projects">
          <h2>Projects</h2>

          <div className="projects-container">
      
            <div className="project">
              <h3>MyFlix React</h3>
              <p>
                Created a Meet App to find interesting events around the world.
              </p>
              <a
                href="https://github.com/sanimations/myFlix-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./assets/myFlix-React.png")}
                  alt="Movie Database React"
                />
              </a>
            </div>

            <div className="project">
              <h3>MyFlix Angular</h3>
              <p>
                My queer movie database created with Angular.
              </p>
              <a
                href="https://github.com/sanimations/myFlixAngularClient"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./assets/myFlix-Angular.png")}
                  alt="Movie Database Angular"
                />
              </a>
            </div>

            <div className="project">
              <h3>WalkinTalkin</h3>
              <p>
                This is a chat app I created with React Native!  A mobile native app with chat, image, and location sharing.
              </p>
              <a
                href="https://github.com/sanimations/WalkinTalkin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./assets/chatApp-reactNative.png")}
                  alt="Chat app"
                />
              </a>
            </div>

            <div className="project">
              <h3>Meet App</h3>
              <p>
                Created a Meet App to find interesting events around the world.
              </p>
              <a
                href="https://sanimations.github.io/meet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./assets/MeetApp-js.png")}
                  alt="Meet App"
                />
              </a>
            </div>

            <div className="project">
              <h3>HTML Portfolio</h3>
              <p>
                This was the first ever Portfolio I made using HTML, CSS, and
                JS. I also made working buttons and links that lead to other
                pages
              </p>
              <a
                href="https://sanimations.github.io/portfolio-website/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./assets/portfolio-html.png")}
                  alt="Portfolio HTML"
                />
              </a>
            </div>

            <div className="project">
              <h3>PokeDex</h3>
              <p>Created a personal pokedex linking to the pokemon API.</p>
              <a
                href="https://sanimations.github.io/pokedex-js/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("./assets/pokedex-js.png")}
                  alt="PokeDex Website"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Other Work Section */}
      <section id="other-work">
        <h2>Other Work</h2>
        <p>
          Here you can showcase any additional work you've done, such as
          freelance projects, personal projects, or contributions to open-source
          projects.
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
