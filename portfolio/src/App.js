import React from "react";
import Routes from "./utils/routes.js";
// import { Route, withRouter } from "react-router-dom";

import jtLogo from "./img/jt-logo.svg";
import jtResume from "./img/Jesse Tingle - Resume.pdf";

// components
import Social from "./components/layout/Social";

// styling
import "./SASS/app.scss";
import HomePage from "./components/layout/HomePage.js";

function App() {
	return (
		<div className="App" id="top">
			<div id="app-header">
				<img src={jtLogo} alt="jt-logo" />
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

			<Social />

			<Routes />
			<a href="#top" className="back-to-top">
				<i className="fas fa-chevron-up"></i>
				Back to Top
			</a>
		</div>
	);
}

export default App;
