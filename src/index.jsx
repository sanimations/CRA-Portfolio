import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Finds the root of your app
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <Container>
    <App />
  </Container>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
