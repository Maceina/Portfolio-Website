import React from 'react';
import './Portfolio.css'
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';


const Portfolio =  () => {
    return (
        <div className="portfolioStyle">
        <h1 className="pP">Portfolio Projects</h1>
        <div className="pItems">
        <Project1/>
        <Project2/>
        <Project3/>
        <Project4/>
        <Project5/>
        </div>
        </div>
    )
}

export default Portfolio;