import { CONSUMED } from "../actions/types";

const initialState = {
  consumed: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONSUMED:
      return {
        consumed: payload,
      };

    default:
      return state;
  }
};

export default reducer;
