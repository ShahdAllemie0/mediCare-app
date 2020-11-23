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

const MedicationItem = ({ medication, navigation }) => {
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
                  {medication.medication.drug}
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