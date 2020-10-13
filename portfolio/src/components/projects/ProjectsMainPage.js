import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store.js";

import { getProjectList } from "../../redux/actions/projectActions.js";

import "../../SASS/projects/projects.scss";

function ProjectsMainPaige() {
	const token = window.localStorage.getItem("token");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProjectList());
		console.log("------You are here-------");
	}, [dispatch]);
	const projectList = useSelector((state) => state);

	// const currentState = store.getState();
	console.log("projectList ================", projectList);
	// const projectArray = projectList.projects.projects;
	// const projectList = currentState.projects.projects;

	return (
		<div className="projects-container">
			<h1 id="projects">Projects</h1>
			{/* 
			{projectList.projects.projects.map((e, i) => {
				return (
					<div className="project-list-container" key={i}>
						<p>{e}</p>
					</div>
				);
			})} */}

			{token && (
				<Link to="/add-project" className="add-project">
					Add New Project
				</Link>
			)}
		</div>
	);
}

export default ProjectsMainPaige;
