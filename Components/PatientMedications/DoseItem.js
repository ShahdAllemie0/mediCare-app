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
  Button,
  Icon
} from "native-base";

// import { Button } from "react-native"

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
                  style={{ color: "#2a7c6c", fontSize: 20, fontWeight: "bold" }}
                >
                  {dose.amount} pill/s
                </Text>
                <Text
                  style={{ color: "#75bab4", fontSize: 20 }}
                >
                  {dose.time}
                </Text>
              </Body>
            </Left>
            <Right>
            <Button onPress={handleDelete} style={{backgroundColor:"#75bab4"}}><Icon name="trash" /></Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Item>
  );
};

export default DoseItem;
