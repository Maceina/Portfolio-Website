import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillsStyle">
      <h1 className="mySkills">My Skills</h1>
      <div className="progress">
      <div style={{ width: 1000 }}>
				<ProgressBar animated now={90} variant={"green"} label={"Node.js"} />
			</div>
      </div>
    </div>
  );
};

export default Skills;
