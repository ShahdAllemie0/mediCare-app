import { combineReducers } from "redux";

import user from "./user";
import conditions from "./conditions";
import medications from "./medications";
const rootReducer = combineReducers({
  user,
  conditions,
  medications,
});

export default rootReducer;
