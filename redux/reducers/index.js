import { combineReducers } from "redux";

import user from "./user";
import conditions from "./conditions";
import medications from "./medications";
import history from "./history";

const rootReducer = combineReducers({
  user,
  conditions,
  medications,
  history,
});

export default rootReducer;
