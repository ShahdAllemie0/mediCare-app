import React from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Screens
import { CONDITIONS } from "../../Navigation/screenNames";
// Redux
import { connect } from "react-redux";
// Components
import LogoutButton from "../Authentication/LogoutButton";
import { logout } from "../../redux/actions";
// Style
import styles from "./styles";

const ConditionsList = ({ logout, conditions, medications }) => (
  <>
    <Text>Hi</Text>
    <Text>Hi</Text>
    <Text>Hi g</Text>
    <Text>Hi</Text>
    <Text>{conditions.conditions[0].name}h</Text>

    <LogoutButton logout={logout} />
  </>
);
const mapStateToProps = (state) => {
  console.log("conditions", state.conditions);
  console.log("-----------------");

  return {
    conditions: state.conditions,
    medications: state.medications,
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConditionsList);
