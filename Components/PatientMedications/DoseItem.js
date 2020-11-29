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
  Item,
  Right,
} from "native-base";

import { Button } from "react-native"

const DoseItem = ({ dose, navigation, doses, setDoses, totalAmount, setTotalAmount }) => {

    const handleDelete = () => {
        const index = doses.indexOf(dose)
        doses.splice(index, 1)
        setTotalAmount(totalAmount - dose.amount)
        setDoses(doses)
    }

  return (
    <Item>
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  {dose.amount} pills at {dose.time}
                </Text>
              </Body>
            </Left>
            <Right>
            <Button title="Delete" onPress={handleDelete}></Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Item>
  );
};

export default DoseItem;