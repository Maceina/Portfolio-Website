import React from 'react';
import ProjectData from "./Projects.json";


function Projects(){

    function NewLineTextDescription(props) {
        const text = props.text;
        const newText = text.split('\n').map(str => <p key={str}>{str}</p>);
        return newText;
    }

    return(
        <section id="projects" className="portfolio">
            <div className="container">

                <div className="section-title">
                <h2>Projects</h2>
                <p>Here's a snapshot of what I have worked on, or in the middle of working on!</p>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {
                        ProjectData.items.map((Project) => {
                            return(
                                <div className="col-lg-4 col-md-6 portfolio-item" key={Project.name}>
                                    <div className="portfolio-wrap">
                                        <img src={Project.image} className="img-fluid" alt={Project.name}/>
                                        <div className = "portfolio-description">
                                            <h6><b>{Project.name}</b></h6>
                                            <NewLineTextDescription text={Project.description}/>
                                        </div>
                                        <div className="portfolio-links">
                                            {Project.live ? <a href={Project.live} target="_blank" rel="noopener noreferrer"><i className="icofont-eye"/></a> : null }
                                            <a href={Project.github} target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"/></a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </section>
    );
}

export default Projects;