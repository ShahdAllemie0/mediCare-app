import instance from "./instance";

import { HISTORY } from "./types";

export const fetchHistory = () => async (dispatch) => {
  try {
    const res = await instance.get("/user/history/");
    const history = res.data;
    dispatch({
      type: HISTORY,
      payload: history,
    });
  } catch (err) {
    console.error("wrong ??", err);
  }
};
