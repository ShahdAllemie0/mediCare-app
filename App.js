import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Container } from "native-base";
import { StyleSheet, LogBox } from "react-native";
// Redux
import store from "./redux";
// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop']);
    LogBox.ignoreLogs(["undefined is not an object"]);
  }, []);
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
