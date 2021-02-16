import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Project from "./Project";

import {
	getProjectList,
	getImages,
} from "../../../redux/actions/projectActions.js";

import "../../../SASS/layout/projectMain.scss";

function ProjectsMainPaige() {
	const token = window.localStorage.getItem("token");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProjectList());
		dispatch(getImages());
		console.log("------You are here-------");
	}, [dispatch]);
	const projectList = useSelector((state) => state.projects);
	const imageList = useSelector((state) => state.projects.images);
	// const currentState = store.getState();
	console.log("projectList ================", projectList);
	console.log("ImageList ^^^^^^^^^^^^^^^^^^^", imageList);
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
							<img
								src={`http://localhost:5000/${e.src}`}
								alt="portfolio display"
							/>
							<div className="title-container">
								{/* <h1>{e.id}</h1> */}
								<h4>Title:</h4>
								<h5>{e.title}</h5>
							</div>

							<h4>Description:</h4>
							<h5>{e.description}</h5>
							<p>
								GitHub Repo:{" "}
								<a
									href={e.github_url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{e.github_url}
								</a>
							</p>
							<p className="deploy-link">
								Deploy Link:{" "}
								<a
									href={e.deploy_link}
									target="_blank"
									rel="noopener noreferrer"
								>
									{e.deploy_link}
								</a>
							</p>
							<Link
								className="read-more"
								to={{
									pathname: "/project",
									projectProps: { id: e.id },
								}}
							>
								{console.log("e.id", e.id)}
								read more...
							</Link>
							{/* <Project id={e.id} /> */}
						</div>
					);
				})}

				{/* {imageList.map((el, index) => {
					return (
						<div className="img-container" key={index}>
							<img src={el.projectImage} alt="" />
						</div>
					);
				})} */}
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
