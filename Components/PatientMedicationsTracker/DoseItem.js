import React from "react";
import { TRACK } from "../../Navigation/screenNames";
import {
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
  Icon,
  Right
} from "native-base";

const DoseItem = ({ dose, navigation, medicationID }) => {
  const n = dose.amount;
  const pills = [...Array(n)].map((elementInArray, index) => (
    <Icon name="pill" />
    )
)
  return (
    <ListItem
      button
      onPress={() => navigation.navigate(TRACK, { dose, medicationID })}
    >
      <Content>
        <Card style={{borderRadius:10}}>
          <CardItem style={{borderRadius:10}} header>
            <Left>
              <Body>
                <Text
                  style={{ color: "#75bab4", fontSize: 20, fontWeight: "bold" }}
                >
                  {dose.amount} pill/s
                </Text>
              </Body>
            </Left>
            <Right>
              <Text style={{ color: "#75bab4", fontSize: 20}}>{dose.time.slice(0, 5)}</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default DoseItem;
