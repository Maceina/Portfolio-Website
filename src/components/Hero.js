import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

function Hero(){
    return(
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Audrius Maceina</h1>
                <div className = "typed">
                    <div className="typewriter">
                        <Typewriter
                                options={{
                                    strings: ['Software Engineer', 'Outdoor Enthusiast'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150,
                                    changeDeleteSpeed: 2000
                                }}
                        />    
                    </div>
                </div>
            </div>
            <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                <div className="scroll-down">
                    <i className="icofont-simple-down"/>
                </div>
            </Link>
        </section>
    );
}

export default Hero;