import React from "react";
import { Icon, Item, View } from "native-base";

import { USER, MEDICATIONS } from "./screenNames";

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
  inactiveTintColor: "#ffffff",
  style: {
    backgroundColor: "#2a7c6c",
  },
};

export const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName = "";
    switch (route.name) {
      case USER:
        iconName = "account";
        break;
      case MEDICATIONS:
        iconName = "medication";
        break;

      default:
        return 0;
      // <CartIcon color={color} />;
    }
    return (
      <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
    );
  },
});
