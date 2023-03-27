import { combineReducers } from "redux";
import { currentPage } from "./currentPage";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  currentPage,
});
