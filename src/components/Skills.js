import { Height } from "@material-ui/icons";
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillsStyle">
      <h1 className="mySkills">My Skills</h1>
      <div className="progress1">
      <div  style={{ width: 1400 }}>
				<ProgressBar animated={false} now={95} variant={"custom"} label={"React.js"} />
			</div>
      <div style={{ width: 1400 }}>
				<ProgressBar animated={false} now={95} variant={"custom"} label={"Node.js"} />
			</div>
      <div style={{ width: 1400 }}>
				<ProgressBar animated={false} now={90} variant={"custom"} label={"Sql an NoSql databases"} />
			</div>
      <div  style={{ width: 1400 }}>
				<ProgressBar animated={false} now={75} variant={"custom"} label={"Computer Science Degree"} />
			</div>
      <div style={{ width: 1400 }}>
				<ProgressBar animated={false} now={75} variant={"custom"} label={"C#/.Net"} />
			</div>
      <div style={{ width: 1400 }}>
				<ProgressBar animated={false} now={75} variant={"custom"} label={"Java"} />
			</div>
      <div style={{ width: 1400 }}>
				<ProgressBar animated={false} now={75} variant={"custom"} label={"Python"} />
			</div>
      <div style={{ width: 1400 }}>
				<ProgressBar animated={false} now={70} variant={"custom"} label={"Linux"} />
			</div>
      <div style={{ width: 1400 }}>
				<ProgressBar animated={false} now={65} variant={"custom"} label={"Php"} />
			</div>
      </div>
    </div>
  );
};

export default Skills;
