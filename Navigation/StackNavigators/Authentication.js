import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { LOGIN, SIGNUP } from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";

const { Navigator, Screen } = createBottomTabNavigator();

// Config
import { tabBarOptions, tabScreenOptions } from "../options";

export default function AuthTabNavigator() {
  return (
    <Navigator
      initialRouteName={LOGIN}
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
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
    </Navigator>
  );
}
