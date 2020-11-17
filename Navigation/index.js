import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { USER } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";

const { Navigator, Screen } = createBottomTabNavigator();

// Config
import { tabBarOptions, tabScreenOptions } from "./options";

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName={USER}
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      <Screen name={USER} component={UserStack} />
    </Navigator>
  );
}
