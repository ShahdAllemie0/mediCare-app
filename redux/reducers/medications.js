import { MEDICATIONS, SET_PATIENT_MEDICATIONS } from "../actions/types";

const initialState = {
  medications: [],
  patientMedications: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MEDICATIONS:
      const medications = payload;
      return {
        ...state,
        medications: medications,
      };
    case SET_PATIENT_MEDICATIONS:
      return {
        ...state,
        patientMedications: payload,
      };
    default:
      return state;
  }
};

export default reducer;
