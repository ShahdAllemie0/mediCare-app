import { AsyncStorage } from "react-native";
import decode from "jwt-decode";

import { SET_CURRENT_USER } from "./types";

import { fetchPatientMedications } from "./medications"

import instance from "./instance";

const setCurrentUser = (token) => async (dispatch) => {
  console.log("setCurrentUser");

  await setAuthToken(token);
  dispatch({
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  });
  dispatch(fetchPatientMedications())
};

const setAuthToken = async (token) => {
  if (token) {
    await AsyncStorage.setItem("myToken", token);
    console.log("setAuthToken");
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    await AsyncStorage.removeItem("myToken");
  }
};

export const login = (userData, navigation) => async (dispatch) => {
  try {
    const res = await instance.post(`/login/`, userData);
    const { access } = res.data;
    console.log("login");
    console.log(access);
    dispatch(setCurrentUser(access));
  } catch (error) {
    console.error("Error while logging in", error);
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const res = await instance.post(`/signup/`, userData);
    const { token } = res.data;
    console.log("signup");
    console.log(token);
    dispatch(setCurrentUser(token));
  } catch (error) {
    console.error("Error while signing up", error);
    console.error(error.response.data);
  }
};

export const logout = () => setCurrentUser();

export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("myToken");

  if (token && decode(token).exp >= currentTimeInSeconds) {
    dispatch(setCurrentUser(token));
  } else setAuthToken();
};
