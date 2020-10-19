import { combineReducers } from "redux";

import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import ImagesReducer from "./ImagesReducer";
import singleProjectReducer from "./singleProjectReducer";

export default combineReducers({
	user: userReducer,
	projects: projectReducer,
	images: ImagesReducer,
	singleProject: singleProjectReducer,
});
