import api from "../../utils/api.js";

import { LOADING_IMAGES, IMAGES_LOADED } from "./types";

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
