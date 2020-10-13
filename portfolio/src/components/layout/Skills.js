import React from "react";

// logos
import reduxLogo from "../../img/redux-logo.png";
import sassLogo from "../../img/Icon-simple-sass.svg";
import lessLogo from "../../img/less-seeklogo.com.svg";
import photoshopLogo from "../../img/Adobe_Photoshop_CC_icon.svg";
import illustratorLogo from "../../img/Adobe_Illustrator_CC_icon.svg";

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
					<i className="fab fa-python"></i>
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
				<li>
					<img className="sassLogo" src={sassLogo} alt="" />
				</li>
				<li>
					<img className="lessLogo" src={lessLogo} alt="" />
				</li>
				<li>
					<img className="photoshopLogo" src={photoshopLogo} alt="" />
				</li>
				<li className="last">
					<img className="illustratorLogo" src={illustratorLogo} alt="" />
				</li>
			</ul>
		</div>
	);
}

export default Skills;
