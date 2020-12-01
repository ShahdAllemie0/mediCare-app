import React from "react";
import { View } from "react-native";

import { ListItem, Left, Right, Content, Card, CardItem, Text, Body } from "native-base";

// import styles from "./styles";

const HistoryItem = ({ history }) => (
  <>
    <ListItem>
      <Content>
        <Card>
          <CardItem header>
            <Left>
              <Body>
                <Text style={{ color: "#2a7c6c", fontSize: 20, fontWeight: "bold"}}>
                  {history.medication.drug}
                </Text>
                <Text style={{ color:"#75bab4" }}>{history.medication.trade_name}</Text>

              </Body>
            </Left>
            <Right>
              <Text style={{ color: "#2a7c6c"}}>{history.duration} weeks</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  </>
)

export default HistoryItem;
