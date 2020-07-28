import React from "react";

// components
import About from "./About";
import Skills from "./Skills";
import ProjectsMainPage from "../projects/ProjectsMainPage";

// styling
import "../../SASS/layout/home-page.scss";

function HomePage() {
	return (
		<div className="main-container">
			<div className="home-header">
				<h1>Jesse Tingle</h1>
				<h3>Software Engineer</h3>
			</div>

			<About />
			<Skills />

			<ProjectsMainPage />
		</div>
	);
}

export default HomePage;
