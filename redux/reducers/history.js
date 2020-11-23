import { HISTORY } from "../actions/types";

const initialState = {
  history: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HISTORY:
      const history = payload;
      return {
        ...state,
        history: history,
      };
    default:
      return state;
  }
};

export default reducer;
