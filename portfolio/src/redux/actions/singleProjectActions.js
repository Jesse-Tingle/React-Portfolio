import api from "../../utils/api.js";

import { LOADING_PROJECTS, PROJECTS_LOADED } from "./types";

export const getSingleProject = (id) => (dispatch) => {
	dispatch({ type: LOADING_PROJECTS });

	api()
		.get(`/projects/${id}`)
		.then((res) => {
			dispatch({
				type: PROJECTS_LOADED,
				payload: res.data,
			});
		});
};
