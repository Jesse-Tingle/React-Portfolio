import React, { useEffect } from "react";
import "../../../SASS/layout/project.scss";
import jtResume from "../../../img/Jesse Tingle - Resume.pdf";
import jtLogo from "../../../img/jt-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProject } from "../../../redux/actions/singleProjectActions.js";
import Images from "./Images.js";

function Project(props) {
	console.log("props", props.location.projectProps.id);
	const projectId = props.location.projectProps.id;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSingleProject(projectId));
	}, [dispatch, projectId]);

	const singleProject = useSelector((state) => state.projects.projects);
	console.log("singleProject", singleProject);
	console.log("singleProject images", singleProject.image);
	const ProjectImages = singleProject.image;

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

			{/* {ProjectImages.length < 1 ? (
				<div>No images</div>
			) : (
				ProjectImages.map((e, i) => {
					return (
						<div key={i}>
							<h1>{e.src}</h1>
							<img src={`http://localhost:5000/${e.src}`} alt="" />
						</div>
					);
				})
			)} */}
			<Images projectImages={ProjectImages} />

			{/* <div>{singleProject.image.src}</div> */}
			{/* <img src={`http://localhost:5000${singleProject.src}`} alt="" /> */}

			<div className="title-container">
				{/* <h1>{e.id}</h1> */}
				<h4>Title:</h4>
				<h5>{singleProject.title}</h5>
			</div>

			<h4>Description:</h4>
			<h5>{singleProject.description}</h5>
			<p>
				GitHub Repo:{" "}
				<a
					href={singleProject.github_url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{singleProject.github_url}
				</a>
			</p>
			<p className="deploy-link">
				Deploy Link:{" "}
				<a
					href={singleProject.deploy_link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{singleProject.deploy_link}
				</a>
			</p>
		</div>
	);
}

export default Project;
