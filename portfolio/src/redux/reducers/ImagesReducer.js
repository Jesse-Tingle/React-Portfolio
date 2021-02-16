import { LOADING_IMAGES, IMAGES_LOADED } from "../actions/types.js";

const initialState = {
	isLoading: false,
	images: [],
};

const ImagesReducer = (state = initialState, action) => {
	switch (action.type) {
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

export default ImagesReducer;
