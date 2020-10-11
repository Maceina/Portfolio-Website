import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';


const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Home", ref: homeRef },
    { section: "Skills", ref: skillsRef },
    { section: "Portfolio", ref: portfolioRef },
    { section: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  return (
    <div className="App">
      {/*<div className="top-spacer" />*/}
      <div className="content">
        <div className="sticky">
          <div className="header" ref={headerRef}>
            <button
              type="button"
              className={`header_link ${visibleSection === "Home" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(homeRef.current);
              }}
            >
              Home
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Skills" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(skillsRef.current);
              }}
            >
              Skills
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Portfolio" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(portfolioRef.current);
              }}
            >
              Portfolio
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
              onClick={() => {
                scrollTo(contactRef.current);
              }}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="section" id="Home" ref={homeRef} ><Home/></div>
        <div className="section" id="Skills" ref={skillsRef} ><Skills/></div>
        <div className="section" id="Portfolio" ref={portfolioRef}><Portfolio/></div>
        <div className="section" id="Contact" ref={contactRef} ><Contact/></div>
      </div>

      {/*<div className="bottom-spacer" />*/}
    </div>
  );
}

export default App;