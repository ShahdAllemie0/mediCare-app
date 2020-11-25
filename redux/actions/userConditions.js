import instance from "./instance";
import { Alert } from "react-native";
import { USER_CONDITIONS, SET_CONDITIONS, DELETE_CONDITIONS } from "./types";

export const fetchUserConditions = () => async (dispatch) => {
  try {
    const res = await instance.get("/user/record/");

    dispatch({
      type: USER_CONDITIONS,
      payload: res.data,
    });
  } catch (err) {
    console.error("wrong !!!", err);
  }
};

export const setUserConditions = (condition_id) => async (dispatch) => {
  try {
    const res = await instance.post("/user/add/condition/", condition_id);
    Alert.alert("Added");
    dispatch({
      type: SET_CONDITIONS,
      payload: res.data,
    });
    dispatch(fetchUserConditions());
  } catch (error) {
    console.error("no adding", error.res.data);
    Alert.alert("Failed");
  }
};

export const deleteUserConditions = (condition_id) => async (dispatch) => {
  try {
    const res = await instance.post("/user/delete/condition/", condition_id);
    Alert.alert("Deleted");
    dispatch({
      type: DELETE_CONDITIONS,
      payload: res.data,
    });
    dispatch(fetchUserConditions());
  } catch (error) {
    console.error("no deleting", error.res.data);
    Alert.alert("Failed");
  }
};
