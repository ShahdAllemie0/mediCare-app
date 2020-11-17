import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { Container } from "native-base";
import { StyleSheet, Text, View } from "react-native";

import store from "./redux";

// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Container>
          <RootNavigator />
        </Container>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
