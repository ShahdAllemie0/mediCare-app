import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import { LOGIN, SIGNUP, CONDITIONS, MEDICATIONS, HISTORY } from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Conditions from "../../Components/Conditions/ConditionsList";
import PatientMedications from "../../Components/PatientMedications/MedicationList";
import History from "../../Components/History/History.js"
// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function UserStack({ user }) {
  return (
    <Navigator
      initialRouteName={user ? HISTORY : LOGIN}
      screenOptions={stackScreenOptions}
    >
      {user ? (
        <>
        <Screen
          name={HISTORY}
          component={History}
          options={{ headerShown: false }}
        />
        <Screen
            name={MEDICATIONS}
            component={PatientMedications}
            options={{ headerShown: false }}
          />
        <Screen
          name={CONDITIONS}
          component={Conditions}
          options={{ headerShown: false }}
        />
        </>
      ) : (
        <>
          <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name={SIGNUP}
            component={Signup}
            options={{ headerShown: false }}
          />

        </>
      )}
    </Navigator>
  );
});
