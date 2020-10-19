import React from "react";
import "../../../SASS/layout/project.scss";
import jtResume from "../../../img/Jesse Tingle - Resume.pdf";
import jtLogo from "../../../img/jt-logo.svg";

function Project(props) {
	console.log("props", props.location.projectProps.id);
	const projectId = props.location.projectProps.id;

	return (
		<div>
			<div className="project-nav">
				<a href="/">
					<img src={jtLogo} alt="jt-logo" />
				</a>
				<a href={jtResume} target="_blank" rel="noopener noreferrer">
					<span className="resume">Resume</span>
				</a>
			</div>
			{/* end project-nav */}
		</div>
	);
}

export default Project;
