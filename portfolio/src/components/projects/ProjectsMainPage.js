import React from "react";
import { Link } from "react-router-dom";
import "../../SASS/projects/projects.scss";

function ProjectsMainPaige() {
	const token = window.localStorage.getItem("token");

	return (
		<div className="projects-container">
			<h1 id="projects">Projects</h1>

			{token && (
				<Link to="/add-project" className="add-project">
					Add New Project
				</Link>
			)}
		</div>
	);
}

export default ProjectsMainPaige;
