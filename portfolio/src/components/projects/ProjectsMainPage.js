import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ProjectForm from "./ProjectForm.js";
// styling
import "../../SASS/projects/projects.scss";

function ProjectsMainPaige() {
	const loggedIn = useSelector((state) => state);

	console.log("ProjectsMainPage loggedIn: ", loggedIn);
	const loggedInTrue = loggedIn.user.loggedIn;
	console.log("loggedInTrue: ", loggedInTrue);
	// const token = window.localStorage.getItem("token");

	return (
		<div className="projects-container">
			<h1>Projects</h1>

			{loggedInTrue && <ProjectForm />}
		</div>
	);
}

export default ProjectsMainPaige;
