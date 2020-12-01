import React, { useState } from "react";
import CheckTime from "./CheckTime";
import { connect } from "react-redux";
import {
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
} from "native-base";
import { Button } from "react-native";
import { setConsumed } from "../../redux/actions";
const DoseTrack = ({ route, setConsumed, consumed }) => {
  let { dose } = route.params;
  const ch = dose.consumed.map((consumed) => {
    // let is_consumed = true;
    // if (consumed.id == dose.id) {
    //   is_consumed = false;
    // }

    return (
      <>
        <CheckTime
          consumed={consumed}
          key={consumed.id + consumed.date_time}
          dose={dose}
        />
        {/* <Text>
          {is_consumed ? (
            <Button onPress={onClick} title={"Take it"} />
          ) : (
            <Button onPress={onClick} title={"Take it"} />
          )}
        </Text> */}
      </>
    );
  });
  const [taken, setTaken] = useState(false);
  const [named, setNamed] = useState("take it");
  const onClick = () => {
    dose = dose.id;
    console.log(dose);
    if (!taken) {
      setConsumed({ dose });
      // delete line 24,25
      setTaken(true);
      setNamed("taked");
      // deleteDoses({ dose })
    }
  };
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text
                style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
              >
                {dose.amount} pill/s, at {dose.time.slice(0,5)} --
                {/* {dose.consumed[0].date_time}l */}
              </Text>
              <Text>{ch}</Text>

              <Button onPress={onClick} title={named} />
            </Body>
          </Left>
        </CardItem>
      </Card>
    </Content>
  );
};

const mapStateToProps = (state) => {
  return { consumed: state.consumed };
};
const mapDispatchToProps = {
  setConsumed,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoseTrack);
