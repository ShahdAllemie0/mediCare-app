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
} from "native-base";

const DoseItem = ({ dose, navigation }) => {
  return (
    <ListItem button onPress={() => navigation.navigate(TRACK, { dose })}>
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  {dose.amount} pill/s, at {dose.time.slice(0,5)}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default DoseItem;
