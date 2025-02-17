import instance from "./instance";

import { CONDITIONS } from "./types";

export const fetchConditions = () => async (dispatch) => {
  try {
    const res = await instance.get("/conditions/");

    const conditions = res.data;

    dispatch({
      type: CONDITIONS,
      payload: conditions,
    });
  } catch (err) {
    console.error("wrong !!!", err);
  }
};
