import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar';
import Cards from './cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stage from './Stage';
import Piece from './piece';
import Footer from './footer';
import Competence from './competence';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Cards />
    <br></br>
    <br></br>
    <Stage />
    <br></br>
    <br></br>
    <Piece />
    <br></br>
    <br></br>
    <Competence />
    <br></br>
    <br></br>
    <Footer />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
