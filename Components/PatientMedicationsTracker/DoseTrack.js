import React, { useState, useEffect } from "react";
import CheckTime from "./CheckTime";
import { connect } from "react-redux";
import { Content, Card, CardItem, Text, Left, Body } from "native-base";
import { Button } from "react-native";
import { setConsumed } from "../../redux/actions";

const DoseTrack = ({ route, setConsumed, patientMedications }) => {
  let { dose } = route.params;
  let { medicationID } = route.params;
  const medication = patientMedications.find((med) => med.id == medicationID);
  const new_dose = medication.doses.find((dos) => dos.id == dose.id);

  let ch = new_dose.consumed.map((consumed) => {
    return (
      <>
        <CheckTime
          consumed={consumed}
          key={consumed.id + consumed.date_time + dose.time + dose.id}
          dose={dose}
        />
      </>
    );
  });

  const onClick = () => {
    const dode_id = dose.id;
    setConsumed({ dose: dode_id });
  };

  const today_date_time = new Date();
  const today_day = today_date_time.getDay();
  const today_date = `${today_date_time.getFullYear()}-${
    today_date_time.getMonth() + 1
  }-${today_date_time.getDate()}`;

  const buttonValue = () => {
    const CurrentConsumedDose = new_dose.consumed?.filter((e) => {
      const consumed_date_time = new Date(e.date_time);
      const consumed_date = `${consumed_date_time.getFullYear()}-${
        consumed_date_time.getMonth() + 1
      }-${consumed_date_time.getDate()}`;

      return consumed_date == today_date;
    });
    return CurrentConsumedDose;
  };

  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text
                style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
              >
                {dose.amount} pill/s, at {dose.time.slice(0, 5)}
              </Text>
              <Text>{ch}</Text>
              {today_day == new_dose.day ? (
                buttonValue().length ? (
                  <Button title={"Consumed"} />
                ) : (
                  <Button onPress={onClick} title={"Take it"} />
                )
              ) : (
                <Button title={"NOT TODAY"} />
              )}
            </Body>
          </Left>
        </CardItem>
      </Card>
    </Content>
  );
};
const mapStateToProps = (state) => {
  return { patientMedications: state.medications.patientMedications };
};

const mapDispatchToProps = {
  setConsumed,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoseTrack);
