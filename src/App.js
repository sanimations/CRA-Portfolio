import React from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header>
        <h1>My Portfolio</h1>
        {/* Add navigation links here if needed */}
      </header>

      {/* Main Content */}
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Welcome to my portfolio website! I am a passionate web developer...</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          {/* Display your projects here */}
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          {/* Add a contact form or contact information here */}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;