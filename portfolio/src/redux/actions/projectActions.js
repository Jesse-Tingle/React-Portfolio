import api from "../../utils/api.js";
import store from "../../store.js";

import { LOADING_PROJECTS, PROJECTS_LOADED } from "./types";

export const getProjectList = () => (dispatch) => {
	dispatch({ type: LOADING_PROJECTS });

	api()
		.get("/projects")
		.then((res) => {
			console.log("projects res.data -------", res.data);
			dispatch({
				type: PROJECTS_LOADED,
				payload: res.data,
			});

			const currentState = store.getState();
			console.log("currentState => ", currentState);
			// return res.data;
		});
};
