import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../../redux/actions/userActions";

function Login(props) {
	console.log("login props: ", props);
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state);

	console.log("useSelector loggedIn: ", loggedIn);
	let history = useHistory();

	// console.log("login props", props);

	// const [err, setErr] = useState("");

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login({ data }));
		history.push("/");
	};

	return (
		<div className="container">
			<div id="overlay">
				<form
					onSubmit={handleSubmit}
					// class name below changes based on loading state
					// this is handled with redux state management
				>
					{/* {err && <div className="err">{err}</div>} */}
					<div
						className="login-field"
						// className={props.isLoading ? "displayNone" : null}
					>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={data.email}
							onChange={handleChange}
						/>
					</div>
					<div
						className="login-field"
						// className={props.isLoading ? "displayNone" : null}
					>
						<input
							type="password"
							name="password"
							placeholder="password"
							value={data.password}
							onChange={handleChange}
						/>
					</div>
					<button
						className="login-button"
						// className={props.isLoading ? "displayNone" : null}
						disabled={props.loading}
						type="submit"
					>
						Log In
					</button>
					<div>
						{/* <img src={spinner} alt="" /> */}
						{/* <h1>Loading...</h1> */}
					</div>
				</form>
			</div>
		</div>
	);
}

// function mapStateToProps(state) {
// 	console.log("login state", state);
// 	return {
// 		isLoading: state.userReducer.isLoading,
// 		// loggedIn: state.userReducer.loggedIn,
// 		// parent_name: state.userReducer.parent_name
// 	};
// }

export default Login;
