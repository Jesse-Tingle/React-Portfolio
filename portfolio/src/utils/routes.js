import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component Imports
import ProtectedRoute from "./ProtectedRoute.js";
import Login from "../components/auth/Login.js";
import ProjectForm from "../components/projects/ProjectForm.js";
import ProjectsMainPage from "../components/projects/ProjectsMainPage.js";

import Splash from "../splash/Splash";

//Styling
import "../../App.css";

const Routes = (props) => {
	return (
		<>
			<Router>
				<Route exact path="/" component={ProjectsMainPage} />
				<Route exact path="/login" render={(props) => <Login {...props} />} />
			</Router>
		</>
	);
};

export default Routes;
