import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import { USER, USERMEDICATIONS, CALANDERANDTRACK } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import CalanderStack from "./StackNavigators/CalanderStack";
import MedicationStack from "./StackNavigators/MedicationStack";

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
      <Screen name={CALANDERANDTRACK} component={CalanderStack} />
      <Screen name={USERMEDICATIONS} component={MedicationStack} />
    </Navigator>
  );
}
