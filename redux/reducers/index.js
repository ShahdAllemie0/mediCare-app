import { combineReducers } from "redux";

import user from "./user";
import conditions from "./conditions";
import medications from "./medications";

import userConditions from "./userCondition";

import history from "./history";
import consumed from "./consumed";

const rootReducer = combineReducers({
  user,
  conditions,
  medications,
  userConditions,
  history,
});

export default rootReducer;
