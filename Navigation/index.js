import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { USER, HISTORY } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import HistoryStack from "./StackNavigators/HistoryStack";

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
      <Screen name={HISTORY} component={HistoryStack} />
    </Navigator>
  );
}
