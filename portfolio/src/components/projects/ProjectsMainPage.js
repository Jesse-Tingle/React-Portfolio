import React from "react";

import ProjectForm from "./ProjectForm.js";
// styling
import "../../SASS/projects/projects.scss";

function ProjectsMainPaige() {
	const token = window.localStorage.getItem("token");

	return (
		<div className="projects-container">
			<h1>Projects</h1>

			{token && <ProjectForm />}
		</div>
	);
}

export default ProjectsMainPaige;
