import api from "../../utils/api.js";
// import store from "../../store.js";

import {
	LOADING_PROJECTS,
	PROJECTS_LOADED,
	LOADING_IMAGES,
	IMAGES_LOADED,
} from "./types";

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
		});
};

export const getImages = () => (dispatch) => {
	dispatch({ type: LOADING_IMAGES });

	api()
		.get("/projects/images")
		.then((res) => {
			console.log("images -------------- ", res.data);
			dispatch({
				type: IMAGES_LOADED,
				payload: res.data,
			});
		});
};
