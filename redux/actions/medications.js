import instance from "./instance";

import { MEDICATIONS } from "./types";

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
