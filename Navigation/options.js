import React from "react";
import { Icon, Item, View } from "native-base";


import { USER, USERMEDICATIONS, CALANDERANDTRACK } from "./screenNames";

export const stackScreenOptions = {
  headerStyle: {
    backgroundColor: "#75BAB4",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "#ffffff",
  inactiveTintColor: "#2a7c6c",
  style: {
    backgroundColor: "#75BAB4",
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
        iconName = "pill";
        break;

        case CALANDERANDTRACK:
          iconName = "calendar";
          break;

      default:
        iconName = "account";
    }
    return (
      <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
    );
  },
});
