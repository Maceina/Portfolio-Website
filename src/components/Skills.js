import React from "react";
import Progress from './Progress';

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="skillsStyle">
      <h1 className="mySkills">My Skills</h1>
      <div className="progressStyle1">
		<Progress done="90" type="React.js"/>
		<Progress done="90" type="Node.js"/>
		<Progress done="85" type="Sql and NoSql databases"/>
		<Progress done="75" type="Computer Science degree"/>
    <Progress done="70" type="C#"/>
		<Progress done="50" type="Java"/>
		<Progress done="40" type="Linux"/>
		<Progress done="35" type="Go"/>
    <Progress done="30" type="Php"/>
    </div>
    </div>
  );
};

export default Skills;
