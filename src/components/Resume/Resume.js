import React from "react";
import ResumeData from "./Resume.json";
import Skills from "./Skills";

function Resume(){

    function NewlineTextDegree(props) {
        const text = props.text;
        const newText = text.split('\n').map(str => <h6 key={str}><b><em>{str}</em></b></h6>);
        return newText;
    }

    return(
        <section id="resume" className="resume section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Resumé</h2>
                    
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Education</h3>
                        {
                            ResumeData.education.map((Education) =>{
                                return(
                                    <div className="resume-item" key={Education.degree}>
                                        <h4>{Education.institution}</h4>
                                        <NewlineTextDegree text={Education.degree}/>
                                        <h5>{Education.duration}</h5>
                                    </div>
                                );
                            })
                        }

                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Volunteering &amp; Leadership Positions</h3>
                        {
                            ResumeData.workExperience.map((WorkExperience) =>{
                                return(
                                    <div className="resume-item" key={WorkExperience.position}>
                                        <h4>{WorkExperience.position}</h4>
                                        <h6>
                                            <b>
                                                <em>{WorkExperience.company}</em>
                                            </b>
                                        </h6>
                                        <h5>{WorkExperience.duration}</h5>
                                        <ul>
                                            {
                                                WorkExperience.description.map((item, index)=> {
                                                    return(
                                                        <li key={index}>{item}</li>
                                                    );
                                                })
                                            }
                                            
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Skills/>
        </section> 
    );
}

export default Resume;