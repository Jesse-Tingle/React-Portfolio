import React from "react";
import Routes from "./utils/routes.js";
// import { Route, withRouter } from "react-router-dom";

// components
import HomePage from "./components/layout/HomePage";
import Social from "./components/layout/Social";

// styling
import "./SASS/app.scss";
import LoginButton from "./components/auth/LoginButton.js";

function App() {
	return (
		<div className="App">
			<div className="app-header">
				<Social />

				<Routes />
			</div>
		</div>
	);
}

export default App;
