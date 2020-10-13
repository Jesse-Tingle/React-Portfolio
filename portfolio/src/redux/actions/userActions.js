// import axios from "axios";
import api from "../../utils/api.js";
import store from "../../store.js";
// import { useHistory } from "react-router-dom";

import { LOADING, LOGIN_SUCCESS } from "./types";

export const login = (creds, props) => (dispatch) => {
	console.log("userAction props", props);
	console.log("userAction creds", creds);
	// const history = useHistory();
	// console.log("token", token);

	dispatch({ type: LOADING });

	api()
		.post("/auth/login", creds.data, {
			// withCredentials: true,
		})
		.then((res) => {
			localStorage.setItem("token", res.data.token);
			console.log("userActions res.data: ", res.data);
			console.log("userAction login props", props);
			console.log("token", res.data.token);
			store.dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
			const currentState = store.getState();
			console.log("currentState => ", currentState);
			return res.data;
		})
		.catch((err) => console.log("err message:", err));
};

store.subscribe(login);
