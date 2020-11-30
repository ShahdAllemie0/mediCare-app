import React from "react";
import { Text } from "native-base";

const CheckTime = ({ setConsumed, consumed, dose }) => {
  const consumed_date_time = new Date(consumed.date_time);
  const consumed_time = consumed_date_time.toLocaleTimeString("it-IT");
  const consumed_date = consumed_date_time.getDate();
  const consumed_hours = consumed_date_time.getHours();
  const consumed_mins = consumed_date_time.getMinutes();

  const today_date_time = new Date();
  const today_time = today_date_time.toLocaleTimeString("it-IT");
  const today_date = today_date_time.getDate();
  const today_hours = today_date_time.getHours();
  const today_mins = today_date_time.getMinutes();
  let dose_time = dose.time;
  dose_time = dose_time.slice(0, 2);

  return (
    <Text>
      {consumed_date == today_date ? (
        consumed_hours == dose_time ? (
          <Text style={{ color: "green", fontSize: 20, fontWeight: "bold" }}>
            on time
          </Text>
        ) : (
          <Text style={{ color: "orange", fontSize: 20, fontWeight: "bold" }}>
            late ({parseInt(consumed_hours) - parseInt(dose_time)} hours)
          </Text>
        )
      ) : (
        <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}></Text>
      )}
    </Text>
  );
};

export default CheckTime;
