import React from "react";

// styling
import "../../SASS/layout/social.scss";

function Social() {
	return (
		<div className="social-container">
			<ul>
				<li>
					<i className="fab fa-github"></i>
				</li>
				<li>
					<i className="fab fa-linkedin"></i>
				</li>
				<li>
					<i className="fab fa-twitter-square"></i>
				</li>
				<li>
					<i className="fas fa-at"></i>
				</li>
			</ul>
		</div>
	);
}

export default Social;
