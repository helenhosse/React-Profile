// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './content/aboutMe';
import Portfolio from './content/portfolio';
import Resume from './content/resume';
import Contact from './content/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="content">
        <AboutMe />
        <Portfolio />
        <Resume />
        <Contact />
        <p></p>
        <Footer />
      </div>
    </div>
  );
}

export default App;
