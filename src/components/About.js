import React from 'react';
// import Icofont from 'react-icofont';

function About(){
    return(
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About Me</h2>
                    <p><b>Oh hey! It's nice of you to stop by my website!</b></p>
                </div>
                
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="./assets/img/lionbig.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <p>
                            My name is Audrius, and I'm form <b>Kaunas, Lithuania, GMT+3 </b>. 
                            I'm a <b>self-taught front-end</b> enginner.
                        </p>
                        <p>I studied chemistry engineering for one and a half years, but I did not find it fulfulling so I dropped out and joined <b>Lithunian military</b> to do my compulsory military service for 9 months. There I gained very valuable <b>leadership and teamwork experience.</b> </p>
                        <p> 
                            After my compulsory military duty, I started working as auto mechanic and trying to find what I want to do in my life as a carrer. 
Slowly but surely, I developed a passion for <b>Software Engineering/Development, and Information Technology</b>. As such, I am always on the lookout for exciting career opportunities in these particular fields of interest.
                        </p>
                        <p>
                            I also have a huge passion for <b>Web Development </b>, especially <b>Front-end</b>.
                        </p>
                        <p>
                            I really enjoy outdoor activities. Whether it's playing basketball with friends, jogging, or simply exploring new places with bike or on foot. </p>
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default About;