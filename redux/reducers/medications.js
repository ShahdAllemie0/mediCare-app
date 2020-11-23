import { MEDICATIONS } from "../actions/types";

const initialState = {
  medications: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MEDICATIONS:
      const medications = payload;
      return {
        medications: medications,
      };
    default:
      return state;
  }
};

export default reducer;
