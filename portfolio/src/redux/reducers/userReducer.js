import { LOADING, LOGIN_SUCCESS } from "../actions/types";
const initialState = {
	isLoading: false,
	user: {
		email: "",
		id: 1,
		message: "",
		name: "",
	},
};

const userReducer = (state = initialState, action) => {
	console.log("userReducer state", state);
	switch (action.type) {
		case LOADING:
			console.log("loading");
			return {
				...state,
				isLoading: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				user: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
