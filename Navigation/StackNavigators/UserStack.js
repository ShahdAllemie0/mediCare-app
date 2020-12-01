import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import {
  LOGIN,
  SIGNUP,
  CONDITIONS,
  HISTORY,
  USERCONDITIONS,
} from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import History from "../../Components/History/History.js";
import ConditionsList from "../../Components/Conditions/ConditionsList";
import UserConditions from "../../Components/Conditions/UserConditions";
// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function UserStack({ user }) {
  return (
    <Navigator
      initialRouteName={user ? USERCONDITIONS : LOGIN}
      screenOptions={stackScreenOptions}
    >
      {user ? (
        <>
          <Screen
            name={USERCONDITIONS}
            component={UserConditions}
            options={{ headerShown: false }}
          />
          <Screen
            name={HISTORY}
            component={History}
            options={{ title: "History" }}
          />
          <Screen
            name={CONDITIONS}
            component={ConditionsList}
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