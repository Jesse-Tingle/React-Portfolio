import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component Imports
import ProtectedRoute from "./ProtectedRoute.js";
import Login from "../components/auth/Login.js";
import ProjectForm from "../components/projects/ProjectForm.js";
import ProjectsMainPage from "../components/projects/ProjectsMainPage.js";
import HomePage from "../components/layout/HomePage.js";
import LoginButton from "../components/auth/LoginButton.js";
import Skills from "../components/layout/Skills.js";

// import Splash from "../splash/Splash";

//Styling
// import "../../App.css";

const Routes = (props) => {
	return (
		<>
			<Router>
				<Route exact path="/" component={HomePage} />
				{/* <Route path="/login" component={LoginButton} /> */}
				<Route path="/login-form" component={Login} />
				<Route path="/skills" component={Skills} />
			</Router>
		</>
	);
};

export default Routes;
