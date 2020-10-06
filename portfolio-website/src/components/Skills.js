import React from "react";
import Progress from './Progress';

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skillsStyle">
      <h1>My Skills</h1>
      <div className="progressStyle1">
		<Progress done="66" type="Javascript"/>
		<Progress done="15" type="C#"/>
		<Progress done="70" type="Java"/>
		<Progress done="100" type="Php"/>
    </div>
    </div>
  );
};

export default Skills;
