import React from "react";
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

const CalendarMedicationItem = ({ dose, navigation }) => {
  return (
    <ListItem
      button
      onPress={() => alert("track, ignore dose coming soon")}
    >
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  {dose.amount} pill/s, at {dose.time}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default CalendarMedicationItem;
