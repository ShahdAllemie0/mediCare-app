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
  Right
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
                  style={{ color: "#2a7c6c", fontSize: 20, fontWeight: "bold" }}
                >
                  {medication.medication.trade_name.toLowerCase()}
                </Text>

              </Body>
            </Left>
            <Right>
            <Text
              style={{ color: "#75bab4", fontSize: 20 }}
            >
              {medication.medication.drug.toLowerCase()}
            </Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default MedicationItem;
