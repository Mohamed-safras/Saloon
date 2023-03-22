import { createAction } from "../../utils/reducers/createAction";
import { USER_ACTION_OPTIONS } from "./user.type";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_OPTIONS.SET_CURRENT_USER, user);
