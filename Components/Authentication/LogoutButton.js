import React from "react";
import { Button, Text, Icon } from "native-base";

const LogoutButton = ({ logout }) => (
  <Button
  iconRight
  full
  large
  onPress={logout}
  style={{
    backgroundColor:"#ffffff",
    justifyContent: "center",
  }}
  >
    <Icon name='log-out' style={{marginLeft: 0, marginRight: 0, fontSize: 40, color:"#2a7c6c"}} />
  </Button>




);

export default LogoutButton;
