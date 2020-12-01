import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";

// Screens

import { USER, USERMEDICATIONS, CALANDERANDTRACK, LANDING, LOGIN, SIGNUP } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import CalanderStack from "./StackNavigators/CalanderStack";
import MedicationStack from "./StackNavigators/MedicationStack";
// Components
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const { Navigator, Screen } = createBottomTabNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

// Config
import { tabBarOptions, tabScreenOptions } from "./options";

export default connect(mapStateToProps)(function RootTabNavigator({ user }) {
  return (
    <Navigator
      initialRouteName={user ? USER : LOGIN}
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      { user ? (
      <>
        <Screen name={USER} component={UserStack} />
        <Screen name={CALANDERANDTRACK} component={CalanderStack} />
        <Screen name={USERMEDICATIONS} component={MedicationStack} />
      </>
          ): (
      <>
        <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false , tabBarVisible: false,}}
        />
        <Screen
          name={SIGNUP}
          component={Signup}
          options={{ headerShown: false, tabBarVisible: false, }}
        />
      </>
          )}
    </Navigator>
  );
})
