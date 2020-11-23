import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Actions
import {
  checkForToken,
  fetchConditions,
  fetchMedications,
  fetchUserConditions,
} from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkForToken());
store.dispatch(fetchConditions());
store.dispatch(fetchMedications());
store.dispatch(fetchUserConditions());

export default store;
