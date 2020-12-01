import React from "react";
import { Button, Text, Icon } from "native-base";

const LogoutButton = ({ logout }) => (
  <Button
  iconRight
  full
  large
  onPress={logout}
  style={{
    backgroundColor:"#2a7c6c",
    justifyContent: "center",
  }}
  >
    <Icon name='log-out' style={{marginLeft: 0, marginRight: 0, fontSize: 40}} />
  </Button>




);

export default LogoutButton;
