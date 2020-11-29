import { SET_MEDICATIONS, SET_PATIENT_MEDICATIONS, SET_MEDICATION_INTERACTIONS } from "../actions/types";

const initialState = {
  medications: [],
  patientMedications: [],
  medicationAndInteractions: {}
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MEDICATIONS:
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
    case SET_MEDICATION_INTERACTIONS:
      console.log("*****----- interactions from REDUCER ------***** ", payload, "*****----- END ------*****")
      return {
        ...state,
        medicationAndInteractions: payload,
      };
    default:
      return state;
  }
};

export default reducer;
