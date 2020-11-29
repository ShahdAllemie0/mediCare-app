import instance from "./instance";

import { SET_MEDICATIONS, SET_PATIENT_MEDICATIONS } from "./types";

// Screens
import { MEDICATIONS } from "../../Navigation/screenNames"

export const fetchMedications = () => async (dispatch) => {
  try {
    const res = await instance.get("/medications/");
    const medications = res.data;
    dispatch({
      type: SET_MEDICATIONS,
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

export const addPatientMedication = (data, navigation) => async (dispatch) => {
  try {
    const res = await instance.post("user/add/medication/", data);
    const medicationInteractions = res.data;
    console.log("*****----- interactions ------***** ", medicationInteractions)
    dispatch(fetchPatientMedications())
    navigation.replace(MEDICATIONS)
    // dispatch({
    //   type: SET_MEDICATION_INTERACTIONS,
    //   payload: medicationInteractions,
    // });
  } catch (err) {
    console.error("wrong ??", err);
  }
};
