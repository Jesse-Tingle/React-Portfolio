import React from "react";
import Routes from "./utils/routes.js";
// import { Route, withRouter } from "react-router-dom";

// import jtLogo from "./img/jt-logo.svg";
// import jtResume from "./img/Jesse Tingle - Resume.pdf";

// components
import Social from "./components/layout/Social";

// styling
import "./SASS/app.scss";

function App() {
	return (
		<div className="App" id="top">
			<div id="app-header"></div>

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
