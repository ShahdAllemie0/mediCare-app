import React from "react";
import { Button, Text } from "native-base";

const LogoutButton = ({ logout }) => (
  <Button full danger onPress={logout}>
    <Text>Logout</Text>
  </Button>
);

export default LogoutButton;
