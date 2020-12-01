import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { login } from "../../redux/actions";

// Screen Names
import { SIGNUP } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

const Login = ({ navigation, login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.authContainer}>
      <Image source={require('./../../assets/logo.png')} style={{width:190, height:190}} />
      <Text style={styles.appName}>MediCare</Text>
      <TextInput
        style={styles.authTextInput}
        placeholder="Username"
        placeholderTextColor="#2a7c6c"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Password"
        placeholderTextColor="#2a7c6c"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => login({ username, password }, navigation)}
      >
        <Text style={styles.authButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.authOther} onPress={() => navigation.replace(SIGNUP)}>
        Click here to register!
      </Text>
    </View>
  );
};

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
