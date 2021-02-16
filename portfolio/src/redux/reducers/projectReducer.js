import { LOADING_PROJECTS, PROJECTS_LOADED } from "../actions/types.js";

const initialState = {
	isLoading: false,
	projects: [
		{
			id: 1,
			title: "",
			description: "",
		},
	],
	images: [
		{
			id: 1,
			projects_id: 1,
			src: "",
			category: "",
		},
	],
};

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_PROJECTS:
			return {
				...state,
				isLoading: true,
			};
		case PROJECTS_LOADED:
			return {
				...state,
				isLoading: false,
				projects: action.payload,
			};

		default:
			return state;
	}
};

export default projectReducer;
