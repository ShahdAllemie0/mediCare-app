import instance from "./instance";
import { Alert } from "react-native";
import { CONSUMED } from "./types";
import { fetchUserConditions } from "./userConditions";
import { fetchPatientMedications } from "./medications";
export const setConsumed = (dose) => async (dispatch) => {
  try {
    const res = await instance.post("dose/consume/", dose);
    // Alert.alert("Braaavooooo!!!");

    dispatch(fetchPatientMedications());
    dispatch(fetchUserConditions());

    dispatch({
      type: CONSUMED,
      payload: res.data,
    });
  } catch (error) {
    console.error("cunsumed", error.res.data);
    Alert.alert("Failed");
  }
};
