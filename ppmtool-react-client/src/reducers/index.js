import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducers";
export default combineReducers({
  errors: errorReducer,
  project: projectReducer
});
