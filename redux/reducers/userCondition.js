import {
  USER_CONDITIONS,
  SET_CONDITIONS,
  SET_CURRENT_USER,
} from "../actions/types";

const initialState = {
  userConditions: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_CONDITIONS:
      return {
        userConditions: payload,
      };

    case SET_CONDITIONS:
      return {
        ...state,
        userConditions: payload,
      };

    // case SET_CURRENT_USER:
    //   if (!payload) return initialState;

    default:
      return state;
  }
};

export default reducer;
