import { CONDITIONS } from "../actions/types";

const initialState = {
  conditions: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONDITIONS:
      const conditions = payload;
      return {
        conditions: conditions,
      };
    default:
      return state;
  }
};

export default reducer;
