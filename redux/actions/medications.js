import instance from "./instance";

import { MEDICATIONS, SET_PATIENT_MEDICATIONS } from "./types";

export const fetchMedications = () => async (dispatch) => {
  try {
    const res = await instance.get("/medications/");
    const medications = res.data;
    dispatch({
      type: MEDICATIONS,
      payload: medications,
    });
  } catch (err) {
    console.error("wrong ??", err);
  }
};

export const fetchPatientMedications = () => async (dispatch) => {
  try {
    const res = await instance.get("user/medications/");
    const patientMedications = res.data;
    dispatch({
      type: SET_PATIENT_MEDICATIONS,
      payload: patientMedications,
    });
  } catch (err) {
    console.error("wrong ??", err);
  }
};
