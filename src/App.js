import React, { useState } from "react";
import About from './components/About';
import BackToTop from './components/BackToTop'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import AOS from 'aos';
//1
import './App.css';

function App() {
  const [menuActive, setMenuState] = useState(false);

  const toggle = () => {
    setMenuState(!menuActive);
  };

  const checkToggle = () => {
    if(menuActive === true){
      toggle();
    }
    return null;
  }

  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
    once: true
  });

  return (
    <div>
      <button type="button" onClick={toggle} className="mobile-nav-toggle d-xl-none">
          <i className={`${menuActive ? "icofont-close" : "icofont-navigation-menu"}`}/>
      </button>
      <div onClick={checkToggle} className={`${menuActive ? "mobile-nav-active" : ""}`}>
        <Header toggle={checkToggle}/>
        <Hero/>
        <div id="main">
          <About/>
          <Resume/>
          <Projects/>
          <Contact/>
        </div>
        <Footer/>
        <BackToTop/>
      </div>
    </div>
  );
}

export default App;
