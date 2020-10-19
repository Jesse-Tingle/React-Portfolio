import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
// import api from "../../utils/api.js";
import jtResume from "../../img/Jesse Tingle - Resume.pdf";
import jtLogo from "../../img/jt-logo.svg";
// components
import About from "./About";
import ProjectsMainPage from "../layout/projects/ProjectsMainPage";

// styling
import "../../SASS/layout/home-page.scss";

function HomePage(props) {
	const loggedIn = useSelector((state) => state);

	const loggedInTrue = loggedIn.user.loggedIn;
	console.log("HomePage loggedInTrue: ", loggedInTrue);

	const logout = () => {
		localStorage.removeItem("token");
	};
	return (
		<div className="main-container">
			<div className="home-header">
				<a href="/">
					<img src={jtLogo} alt="jt-logo" />
				</a>
				<nav id="nav">
					<a href="#about">
						<span>01.</span> About
					</a>
					<a href="#projects">
						<span>02.</span> Projects
					</a>
					<a href="#contact">
						<span>03.</span> Contact
					</a>
					<a href={jtResume} target="_blank" rel="noopener noreferrer">
						<span className="resume">Resume</span>
					</a>
				</nav>
			</div>

			<About />

			<ProjectsMainPage />
			<div className="login-logout">
				<Link to="/login-form" className="link">
					Log In
				</Link>
				<Link onClick={logout} to="/">
					Logout
				</Link>
			</div>
		</div>
	);
}

export default HomePage;
