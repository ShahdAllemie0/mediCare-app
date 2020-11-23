import React from "react";
import { View } from "react-native";

import { ListItem, Left, Right, Content, Card, CardItem, Text } from "native-base";

// import styles from "./styles";

const HistoryItem = ({ history }) => (
  <>
    <ListItem>
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text style={{ color: "black", fontSize: 20, fontWeight: "bold"}}>
                  history.history.medication.drug
                </Text>
                <Text>{history.history.medication.trade_name}</Text>
                <Right>
                  <Text>{history.history.duration} weeks</Text>
                </Right>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  </>
)
