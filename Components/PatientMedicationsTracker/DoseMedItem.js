import React, { useState, useEffect } from "react";
import { Content, Card, CardItem, Text, Left, Body } from "native-base";

import DoseItem from "./DoseItem";

const DoseMedItem = ({ medication, day, date, navigation, medicationID }) => {
  const [dayDoses, setDayDoses] = useState();

  const [dosesList, setDosesList] = useState();
  useEffect(() => {
    var end = new Date(medication.end);
    if (day && +date <= +end) {
      const myList = medication.doses.filter((dose) => dose.day == day);
      setDayDoses(myList);
      setDosesList(
        myList.map((dose) => (
          <DoseItem
            key={dose.id}
            dose={dose}
            navigation={navigation}
            medicationID={medicationID}
          />
        ))
      );
    }
  }, [medication, day]);

  if (dayDoses && dayDoses.length != 0) {
    return (
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text
                  style={{ color: "#2a7c6c", fontSize: 20, fontWeight: "bold" }}
                >
                  {medication.medication.trade_name.toLowerCase()}
                </Text>
                {dosesList}
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    );
  }
  return null;
};

export default DoseMedItem;
