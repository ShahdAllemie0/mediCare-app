import React from "react";
// Screens
import { CONDITIONS } from "../../Navigation/screenNames";
// Redux
import { connect } from "react-redux";
// Components
import LogoutButton from "../Authentication/LogoutButton";
import { logout, fetchUserConditions } from "../../redux/actions";
import { TouchableOpacity, View, Image } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "native-base";

import {
  MEDICATIONS,
  HISTORY,
  USERCONDITIONS,
  CALENDAR,
} from "../../Navigation/screenNames";
// Style
import styles from "./styles";

const LandingPage = (navigation) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to</Text>
        <Image source={require('./../../assets/logo.png')} style={{width:190, height:190}} />
        <Text style={styles.appName}>MediCare</Text>
      </View>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userConditions: state.userConditions,
  };
};

const mapDispatchToProps = {
  logout,
  fetchUserConditions,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
