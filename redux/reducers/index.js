import { combineReducers } from "redux";

import user from "./user";
import conditions from "./conditions";
import medications from "./medications";
import userConditions from "./userCondition";
const rootReducer = combineReducers({
  user,
  conditions,
  medications,
  userConditions,
});

export default rootReducer;
