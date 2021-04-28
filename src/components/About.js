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
                            I graduated from Kaunas University of Technology with a <b>Bachelor's of Computer Science</b>.
                        </p>
                        <p>Before my studies, I joined <b>Lithunian military</b> to do my compulsory military service for 9 months. There I gained very valuable <b>leadership and teamwork experience.</b> </p>
                        <p> 
                            Though my studies, I developed a passion in <b>Software Engineering/Development, and Information Technology</b>. As such, I am always on the lookout for exciting career opportunities in these particular fields of interest.
                        </p>
                        <p>
                            I also have a huge passion for <b>Web Development </b> (hence my degree), especially <b>web applicatons</b>.
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