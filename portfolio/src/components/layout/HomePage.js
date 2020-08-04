import React from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api.js";

// components
import About from "./About";
import Skills from "./Skills";
import ProjectsMainPage from "../projects/ProjectsMainPage";

// styling
import "../../SASS/layout/home-page.scss";

function HomePage(props) {
	console.log("home page props:", props);
	console.log("home page token", props.location.state.credentials.token);
	const token = props.location.state.credentials.token;

	const logout = () => {
		localStorage.removeItem(token);
		api().post(`http://localhost:5000/auth/logout`, {});
	};
	return (
		<div className="main-container">
			{/* {token ? null : ( */}
			<Link to="/login-form" className="link">
				Log In
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
