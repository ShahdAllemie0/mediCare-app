import React, { useState, useEffect } from "react";
import {
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
} from "native-base";

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
      <ListItem
        button
        onPress={() => alert("update, delete medication coming soon")}
      >
        <Content>
          <Card>
            <CardItem header>
              <Left>
                <Body>
                  <Text
                    style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                  >
                    {medication.medication.trade_name}
                  </Text>
                  {dosesList}
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </ListItem>
    );
  }
  return null;
};

export default DoseMedItem;
