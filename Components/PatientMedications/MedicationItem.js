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
import { Edit_MEDICATION } from "../../Navigation/screenNames";

const MedicationItem = ({ medication, navigation }) => {
  return (
    <ListItem
      button
      onPress={() => navigation.navigate(Edit_MEDICATION, {medication})}
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
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default MedicationItem;