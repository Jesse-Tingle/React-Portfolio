// import axios from "axios";
import api from "../../utils/api.js";
import store from "../../store.js";
import { LOADING, LOGIN_SUCCESS } from "./types";

export const login = (creds, props) => (dispatch) => {
	console.log("userActions props", props);
	console.log("userAction creds", creds);
	dispatch({ type: LOADING });
	// return setTimeout(() => {
	api()
		.post("http://localhost:5000/api/auth/login", creds)
		.then((res) => {
			localStorage.setItem("token", res.data.token);
			console.log("userActions res.data", res.data);
			console.log("login res.data", res.data);
			console.log("token", res.data.token);
			store.dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			props.history.push({
				pathname: "/",
				state: {
					credentials: res.data,
				},
			});
		})
		.catch((err) => console.log("err message:", err));
	// }, 1000);
};

store.subscribe(login);

export const loginCoach = (coachCreds) => (dispatch) => {
	return api
		.post(
			`${process.env.REACT_APP_BACKEND}/auth/login?user_type=coach`,
			coachCreds,
			{ withCredentials: true }
		)
		.then((res) => {
			console.log(res.data);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			return res.data;
		})
		.catch((err) => {
			console.log(err.response);
		});
};
