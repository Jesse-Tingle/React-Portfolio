import { combineReducers } from "redux";

import userReducer from "./userReducer";
// import coachReducer from "./coachReducer";
// import authReducer from "./authReducer";

export default combineReducers({
	user: userReducer,
	// coach: coachReducer,
	// auth: authReducer
});
