import {
	LOADING_PROJECTS,
	PROJECTS_LOADED,
	LOADING_IMAGES,
	IMAGES_LOADED,
} from "../actions/types.js";

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
	// projects: {
	// 	isLoading: false,
	// 	projects: [
	// 		{
	// 			id: 1,
	// 			title: "",
	// 			description: "",
	// 			stack: [
	// 				{
	// 					projects_id: 1,
	// 					stack_id: 1,
	// 					id: 1,
	// 					stack_title: "",
	// 					description: "",
	// 				},
	// 			],
	// 		},
	// 	],
	// },
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
		case LOADING_IMAGES:
			return {
				...state,
				isLoading: true,
			};
		case IMAGES_LOADED:
			return {
				...state,
				isLoading: false,
				images: action.payload,
			};
		default:
			return state;
	}
};

export default projectReducer;
