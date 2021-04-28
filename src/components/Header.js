import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';


function Header(props){
    const [menuState, setMenuState] = useState(props);

    useEffect(() => {
        setMenuState(props);
    }, [props]);

    function scrollToTop() {
        scroll.scrollToTop();
    }

    return(
        <header id="header">
            <div className="d-flex flex-column justify-content-start">
                <div className="profile">
                    <div onClick={scrollToTop} className="image-name" style={{cursor:"pointer"}}>
                        <h1 className="text-light">Audrius Maceina</h1>
                    </div>
                    <div className="social-links mt-3 text-center">
                        <a href={"mailto:maceinaaudrius@gmail.com"} className="email" target="_blank" rel="noopener noreferrer">
                            <i className="bx bx-envelope"/>
                        </a>
                        <a href={"https://www.linkedin.com/in/audrius-maceina-01713a183/"} className="linkedin" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-linkedin"/>
                        </a>
                        <a href={"https://github.com/Maceina"} className="github" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"/>
                        </a>
                    </div>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="hero" spy={true} smooth={true} duration={900}>
                                <i className="bx bx-home"/><span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="about" spy={true} smooth={true} duration={900}>
                                <i className="bx bx-user"/><span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="resume" spy={true} smooth={true} duration={900}>
                                <i className="bx bx-file"/><span>Resumé</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="projects" spy={true} smooth={true} duration={900}>
                                <i className="bx bx-book-content"/><span>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={menuState.toggle} activeClass="active" to="contact" spy={true} smooth={true} duration={900}>
                                <i className='bx bx-message-square-edit'/><span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;