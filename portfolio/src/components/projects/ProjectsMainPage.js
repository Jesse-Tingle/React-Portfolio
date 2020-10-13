import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "../../store.js";
import projectReducer from "../../redux/reducers/projectReducer.js";

import { getProjectList } from "../../redux/actions/projectActions.js";

import "../../SASS/projects/projects.scss";

function ProjectsMainPaige() {
	const token = window.localStorage.getItem("token");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProjectList());
		console.log("------You are here-------");
	}, [dispatch]);
	const projectList = useSelector((state) => state.projects);

	// const currentState = store.getState();
	console.log("projectList ================", projectList);
	// const projectArray = projectList.projects.projects;
	// const projectList = currentState.projects.projects;

	return (
		<div className="projects-container">
			<h1 id="projects">Projects</h1>

			{console.log("projectList----xxxxxxx------xxxx----", projectList)}
			<div className="project-list-container">
				{projectList.projects.map((e, i) => {
					return (
						<div key={i}>
							<h4>Title: {e.title}</h4>
							<h5>Description: {e.description}</h5>
							<p>GitHub Repo: {e.github_url}</p>
							<p>Deploy Link: {e.deploy_link}</p>
						</div>
					);
				})}
			</div>

			{token && (
				<Link to="/add-project" className="add-project">
					Add New Project
				</Link>
			)}
		</div>
	);
}

export default ProjectsMainPaige;
