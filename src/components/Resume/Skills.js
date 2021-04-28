import React from "react";
import SkillsData from "./Skills.json";

function Skills(){
    return(
        <section id="skills" className="skills section-bg" >
            <div className="container">

                <div className="section-title">
                <h3><b>Skills</b></h3>
                <p>My strongholds are in Web Development especially in Javascript.</p>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6 pb-5" data-aos="fade-up">
                        <h6>Programming Languages, Frameworks and Databases</h6>
                            {
                                SkillsData.programmingLanguages.map((Skills, index) =>{
                                    const percentage = Skills.proficieny + '%';
                                    return(
                                        <div className="progress" key={index}>
                                            <span className="skill">{Skills.lang} 
                                                {/* <i className="val">{percentage}</i> */}
                                            </span>
                                            <div className="progress-bar-wrap">
                                                <div className="progress-bar" 
                                                    role="progressbar" 
                                                    style={{width: percentage}}
                                                    aria-valuenow={Skills.proficieny} 
                                                    aria-valuemin={0} 
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    );
                                })
                            }     
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h6>Operating Systems (OS), Software Tools &amp; etc.</h6>
                            {
                                SkillsData.softwareTools.map((Skills, index) =>{
                                    const percentage = Skills.proficieny + '%';
                                    return(
                                        <div className="progress" key={index}>
                                            <span className="skill">{Skills.name} 
                                                {/* <i className="val">{percentage}</i> */}
                                            </span>
                                            <div className="progress-bar-wrap">
                                                <div className="progress-bar" 
                                                    role="progressbar" 
                                                    style={{width: percentage}}
                                                    aria-valuenow={Skills.proficieny} 
                                                    aria-valuemin={0} 
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    );
                                })
                            }     
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;