import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import api from "../../utils/api.js";

// components
import About from "./About";
import Skills from "./Skills";
import ProjectsMainPage from "../projects/ProjectsMainPage";

// styling
import "../../SASS/layout/home-page.scss";

function HomePage(props) {
	// console.log("home page props:", props);

	const loggedIn = useSelector((state) => state);

	// console.log("HomePage loggedIn: ", loggedIn);
	const loggedInTrue = loggedIn.user.loggedIn;
	// console.log("loggedInTrue: ", loggedInTrue);
	// console.log("home page token", props.location.state.credentials.token);
	// const token = props.location.state.credentials.token;

	const logout = () => {
		// localStorage.removeItem(token);
		api().post(`http://localhost:5000/api/auth/logout`);
	};
	return (
		<div className="main-container">
			{/* {token ? null : ( */}
			<Link to="/login-form" className="link">
				Log In
			</Link>
			<Link onClick={logout} to="/">
				Logout
			</Link>
			{/* )} */}

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
