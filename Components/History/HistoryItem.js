import React from "react";
import { View } from "react-native";

import { ListItem, Left, Right, Content, Card, CardItem, Text, Body } from "native-base";

// import styles from "./styles";

const HistoryItem = ({ history }) => (
  <>
    <ListItem>
      <Content>
        <Card style={{borderRadius:10}}>
          <CardItem style={{borderRadius:10}} header>
            <Left>
              <Body>
                <Text style={{ color: "#2a7c6c", fontSize: 20, fontWeight: "bold"}}>
                  {history.medication.drug.toLowerCase()}
                </Text>
                <Text style={{ color:"#75bab4" }}>{history.medication.trade_name.toLowerCase()}</Text>

              </Body>
            </Left>
            <Right>
              <Text style={{ color: "#2a7c6c"}}>from : {history.begin}</Text>
              <Text style={{ color: "#2a7c6c"}}>to : {history.end}</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  </>
)

export default HistoryItem;
