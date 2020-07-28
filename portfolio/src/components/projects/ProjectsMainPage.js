import React from "react";

import ProjectForm from "./ProjectForm.js";
// styling
import "../../SASS/projects/projects.scss";

function ProjectsMainPaige() {
	return (
		<div className="projects-container">
			<h1>Projects</h1>

			<ProjectForm />
		</div>
	);
}

export default ProjectsMainPaige;
