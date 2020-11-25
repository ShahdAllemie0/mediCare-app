import React from "react";
// Screens
import { CONDITIONS } from "../../Navigation/screenNames";
// Redux
import { connect } from "react-redux";
// Components
import LogoutButton from "../Authentication/LogoutButton";
import { logout, fetchUserConditions } from "../../redux/actions";
import { TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "native-base";
// Style
import styles from "./styles";

const UserConditions = ({
  logout,
  userConditions,
  navigation,
  fetchUserConditions,
}) => {
  let userConditionsList = null;
  if (userConditions.userConditions.conditions == null) {
    fetchUserConditions();
  } else {
    userConditionsList = userConditions.userConditions.conditions.map(
      (condition) => {
        return (
          <CheckBox disabled={true} title={condition.name} checked={true} />
        );
      }
    );
  }
  return (
    <>
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Welcome to MEDICARE</Text>
        <Text style={styles.authTitle}>Your Medical Conditions:</Text>

        {userConditionsList}

        <TouchableOpacity
          style={styles.authButton}
          onPress={() => navigation.navigate(CONDITIONS)}
        >
          <Text style={styles.authButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <LogoutButton logout={logout} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserConditions);
