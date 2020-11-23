import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import History from "../../Components/History/History";

import { HISTORY } from "../screenNames";

import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

export default function HistoryStack() {
  return (
    <>
      <Navigator initialRouteName={HISTORY} screenOptions={stackScreenOptions}>
        <Screen name={HISTORY} component={History} />
      </Navigator>
    </>
  )
}
