import { combineReducers } from "redux";

import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import ImagesReducer from "./ImagesReducer";

export default combineReducers({
	user: userReducer,
	projects: projectReducer,
	images: ImagesReducer,
});
