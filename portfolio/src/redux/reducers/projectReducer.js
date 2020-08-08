import { LOADING, PROJECTS_LOADED } from "../actions/types.js";

const initialState = {
	isLoading: false,
	project: {
		id: 1,
		title: "",
		description: "",
		stack: [
			{
				projects_id: 1,
				stack_id: 1,
				id: 1,
				stack_title: "",
				description: "",
			},
		],
	},
};

const projectReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				isLoading: true,
			};
		case PROJECTS_LOADED:
			return {
				...state,
				isLoading: false,
				project: action.payload,
			};
		default:
			return state;
	}
};

export default projectReducer;
