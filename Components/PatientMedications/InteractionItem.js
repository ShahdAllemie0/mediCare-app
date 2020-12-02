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

const InteractionItem = ({ medication }) => {
  return (
    <ListItem
      button
    >
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text
                  style={{ color: "#2a7c6c", fontSize: 20, fontWeight: "bold", textAlign:"center" }}
                >
                  {medication.medication.trade_name}
                </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default InteractionItem;
