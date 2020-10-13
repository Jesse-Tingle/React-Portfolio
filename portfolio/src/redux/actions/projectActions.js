import api from "../../utils/api.js";
import store from "../../store.js";

import { LOADING_PROJECTS, PROJECTS_LOADED } from "./types";

export const getProjectByID = () => (dispatch) => {
	dispatch({ type: LOADING_PROJECTS });

	api().get("http://localhost:5000/api/projects/:id");
};
