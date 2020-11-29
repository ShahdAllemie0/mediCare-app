import instance from "./instance";

import { SET_MEDICATIONS, SET_PATIENT_MEDICATIONS, SET_MEDICATION_INTERACTIONS } from "./types";

// Screens
import { MEDICATIONS, MEDICATIONS_INTERACTIONS } from "../../Navigation/screenNames"

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
    console.log("*****----- interactions ------***** ", medicationInteractions, "*****----- END ------***** ")
    dispatch(fetchPatientMedications())
    dispatch({
      type: SET_MEDICATION_INTERACTIONS,
      payload: medicationInteractions,
    });
    if(medicationInteractions.drug_drug_interactions || medicationAndInteractions.drug_drug_time_interactions || medicationAndInteractions.drug_disease_interactions){
      navigation.replace(MEDICATIONS_INTERACTIONS) 
    } else {
      navigation.replace(MEDICATIONS)
    }
  } catch (err) {
    console.error("wrong ??", err);
  }
};

export const updatePatientMedication = (data, medication_id, navigation) => async (dispatch) => {
  try {
    const res = await instance.patch(`update/${medication_id}/medication/`, data);
    const medication = res.data;
    console.log("*****----- updated medication ------***** ", medication)
    dispatch(fetchPatientMedications())
    navigation.replace(MEDICATIONS)
  } catch (err) {
    console.error("wrong ??", err);
  }
};

export const deleteMedication = (medicationID, navigation) => async (dispatch) => {
  try {
    const res = await instance.delete(`user/delete/${medicationID}/medication/`);
    const medication = res.data;
    console.log("*****----- updated medication ------***** ", medication)
    dispatch(fetchPatientMedications())
    navigation.replace(MEDICATIONS)
  } catch (err) {
    console.error("wrong ??", err);
  }
};



