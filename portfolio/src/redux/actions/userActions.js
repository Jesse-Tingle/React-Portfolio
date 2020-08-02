import axios from "axios";
import { store } from "../../store.js";
import { LOADING, LOGIN_SUCCESS } from "./types";

export const login = (creds) => (dispatch) => {
	dispatch({ type: LOADING });
	return setTimeout(() => {
		axios
			.post("http://localhost:3000/api/auth/login", creds)
			.then((res) => {
				localStorage.setItem("token", res.data.token);
				console.log("login res.data", res.data);
				store.dispatch({
					type: LOGIN_SUCCESS,
				});
				props.history.push({
					pathname: "/profile",
					state: { credentials: res.data },
				});
			})
			.catch((err) => console.log(err.response));
	}, 1000);
};

store.subscribe(login);

export const loginCoach = (coachCreds) => (dispatch) => {
	dispatch({ type: LOGIN_START });
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
			dispatch({
				type: LOGIN_FAIL,
				payload: err,
			});
		});
};
