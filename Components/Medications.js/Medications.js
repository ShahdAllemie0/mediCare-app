import React from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Screens
import { MEDICATIONS } from "../../Navigation/screenNames";
// Redux
import { connect } from "react-redux";
// Components
// Style
import styles from "./styles";

const MedicationList = ({ medications, navigation }) => (
  <>
    <Text>Hi</Text>
    <Text>Hi</Text>
    <Text>Hi f</Text>
    <Text>{medications.trade_name}</Text>
    <Text>{medications.medications[1].trade_name}h</Text>
  </>
);
const mapStateToProps = (state) => {
  console.log("medications", state.medications);
  return {
    medications: state.medications,
  };
};

const mapDispatchToProps = {
  //   logout,
};

export default connect(null, mapDispatchToProps)(MedicationList);
