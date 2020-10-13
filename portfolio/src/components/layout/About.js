import React from "react";

// styling
import "../../SASS/layout/about.scss";

// components
import Skills from "./Skills.js";

function About() {
	return (
		<div className="about-container">
			<h4 id="about">Hi, my name is...</h4>
			<h1>Jesse Tingle</h1>
			<h3>I build things for the web.</h3>
			<p>
				Experienced Team Lead with a demonstrated history of working in the
				e-learning industry. Skilled in Software Installation, Adobe Photoshop,
				Website Building, Training Manuals, and Vector Illustration. Strong
				information technology professional with a Full Stack Web Development
				focused in Computer Software Engineering from Lambda School.
			</p>
			<Skills />
		</div>
	);
}

export default About;
