import React from "react";
import { Route, withRouter } from "react-router-dom";

// components
import HomePage from "./components/layout/HomePage";
import Social from "./components/layout/Social";

// styling
import "./SASS/app.scss";

function App() {
	return (
		<div className="App">
			<div className="app-header">
				<Social />
				<HomePage />
			</div>
		</div>
	);
}

export default App;
