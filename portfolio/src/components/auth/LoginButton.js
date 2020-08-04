import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
	return (
		<div className="links">
			<Link to="/login-form" className="link">
				Log In form
			</Link>
		</div>
	);
}

export default LoginButton;
