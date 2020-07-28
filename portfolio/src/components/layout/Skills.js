import React from "react";

// logos
import reduxLogo from "../../img/redux-logo.png";

// styling
import "../../SASS/layout/skills.scss";

function Skills() {
	return (
		<div className="skills-container">
			<h1>Skills</h1>

			<ul>
				<li>
					<i className="fab fa-html5"></i>
				</li>
				<li>
					<i className="fab fa-css3-alt"></i>
				</li>
				<li>
					<i className="fab fa-js"></i>
				</li>
				<li>
					<i className="fab fa-react"></i>
				</li>
				<li>
					<img className="redux" src={reduxLogo} alt="" />
				</li>
				<li>
					<i className="fab fa-github"></i>
				</li>
			</ul>
		</div>
	);
}

export default Skills;
