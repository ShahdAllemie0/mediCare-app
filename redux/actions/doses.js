import instance from "./instance";


export const addDose = (data) => async (dispatch) => {
  try {
    const res = await instance.post("add/dose/", data);
    const dose = res.data;
  } catch (err) {
    console.error("wrong ??", err);
  }
};

export const deleteDose = (doseID) => async (dispatch) => {
    try {
      const res = await instance.delete(`delete/${doseID}/dose/`);
    } catch (err) {
      console.error("wrong ??", err);
    }
  };