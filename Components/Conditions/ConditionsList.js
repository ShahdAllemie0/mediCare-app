import React from "react";
// Screens

import {
  MEDICATIONS,
  HISTORY,
  USERCONDITIONS,
  CALENDAR,
} from "../../Navigation/screenNames";
// Redux
import { connect } from "react-redux";
// Components
import LogoutButton from "../Authentication/LogoutButton";
import ConditionsItem from "./ConditionItem";
import { logout } from "../../redux/actions";
import { TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
// Style
import styles from "./styles";

const ConditionsList = ({ logout, conditions, navigation }) => {
  const conditionsList = conditions.conditions.map((condition) => (
    <ConditionsItem condition={condition} key={condition.id} />
  ));
  return (
    <>
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Medical Conditions List:</Text>
        <View style={{width:300}}>
        {conditionsList}
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return { conditions: state.conditions };
};
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(ConditionsList);
