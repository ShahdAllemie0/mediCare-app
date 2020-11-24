import React, { useState } from "react";
// Screens
import { MEDICATIONS, HISTORY } from "../../Navigation/screenNames";
// Redux
import { connect } from "react-redux";
// Components
import LogoutButton from "../Authentication/LogoutButton";
import {
  logout,
  setUserConditions,
  deleteUserConditions,
} from "../../redux/actions";
import { TextInput, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "native-base";
// Style
import styles from "./styles";

const ConditionsList = ({
  logout,
  conditions,
  setUserConditions,
  userConditions,
  deleteUserConditions,
  navigation,
}) => {
  const conditionsList = conditions.conditions.map((condition) => {
    const [checked, setChecked] = useState(false);
    const [condition_id, setConditionID] = useState(null);

    const onClick = () => {
      setChecked(!checked);
      setConditionID(condition.id);
      if (!checked) {
        setUserConditions({ condition_id });
      } else if (checked) {
        deleteUserConditions({ condition_id });
      }
    };
    return (
      <>
        <CheckBox
          disabled={true}
          title={condition.name}
          checked={checked}
          onIconPress={onClick}
        />
      </>
    );
  });

  console.log(userConditions.conditions);
  return (
    <>
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Medical Conditions</Text>

        {conditionsList}

        <TouchableOpacity
        style={styles.authButton}
        onPress={() => navigation.navigate(HISTORY)}
        >
        <Text style={styles.authButtonText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => navigation.navigate(MEDICATIONS)}
        >
        <Text style={styles.authButtonText}>Your Medications</Text>
      </TouchableOpacity>
        <LogoutButton logout={logout} />
      </View>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    conditions: state.conditions,
    userConditions: state.userConditions,
  };
};

const mapDispatchToProps = {
  logout,
  setUserConditions,
  deleteUserConditions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConditionsList);
