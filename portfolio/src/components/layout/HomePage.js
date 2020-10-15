import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
// import api from "../../utils/api.js";

// components
import About from "./About";
import ProjectsMainPage from "../projects/ProjectsMainPage";

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
			<div className="home-header"></div>

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
