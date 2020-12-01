import React from "react";
import { Icon, Item, View } from "native-base";

import { USER, USERMEDICATIONS, CALANDERANDTRACK } from "./screenNames";

export const stackScreenOptions = {
  headerStyle: {
    backgroundColor: "#343A40",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "white",
  inactiveTintColor: "black",
  style: {
    backgroundColor: "#343A40",
  },
};

export const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName = "";
    switch (route.name) {
      case USER:
        iconName = "account";
        break;
      case USERMEDICATIONS:
        iconName = "account";
        break;
      default:
        iconName = "account";
    }
    return (
      <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
    );
  },
});
