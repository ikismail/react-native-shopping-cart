import { combineReducers } from "redux";
import { AuthReducer } from "./auth.store";

export default combineReducers({
  authStore: AuthReducer,
});
