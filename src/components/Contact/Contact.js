import React from 'react';
import Icofont from 'react-icofont';
import ContactForm from './ContactForm';

function Contact(){
    return(
        <section id="contact" className="contact section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>If you would like to connect with me, my personal information is listed below. Alternatively, you can fill out the form and I will get back to you at my earliest convienience.</p>
                </div>

                <div className="row" data-aos="fade-down">
                    <div className="col-sm pb-5 d-flex justify-content-between">
                        <div className="info">
                            <div className="email">
                                <a href={process.env.REACT_APP_EMAIL_URL} className="email" target="_blank" rel="noopener noreferrer">
                                    <Icofont icon="envelope"/>
                                </a>
                                <h4>Email:</h4>
                                <p>maceinaaudrius@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm pb-5 d-flex justify-content-between">
                        <div className="info">                   
                            <div className="linkedin">
                                <a href={process.env.REACT_APP_LINKEDIN_URL} className="linkedin" target="_blank" rel="noopener noreferrer">
                                    <Icofont icon="linkedin"/>
                                </a>
                                <h4>LinkedIn<br/>(Sign-In Required):</h4>
                                <p>linkedin.com/in/audrius-maceina-01713a183/</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm pb-5 d-flex justify-content-between">
                        <div className="info">
                            <div className="github">
                                <a href={process.env.REACT_APP_GITHUB_URL} className="github" target="_blank" rel="noopener noreferrer">
                                    <i className="bx bxl-github"/>
                                </a>
                                <h4>GitHub:</h4>
                                <p>github.com/Maceina</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-sm">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;