import React, { useState } from "react";

// Redux
import { connect } from "react-redux";
import { signup } from "../../redux/actions";

// Screen Names
import { LOGIN } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { Text } from "native-base";
import styles from "./styles";

const Signup = ({ navigation, signup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.authContainer}>
      <Image source={require('./../../assets/logo3.png')} style={{width:190, height:190}} />
      <Text style={styles.appName}>MediCare</Text>
      <TextInput
        style={styles.authTextInput}
        placeholder="Username"
        placeholderTextColor="#cce8e1"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Password"
        placeholderTextColor="#cce8e1"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => signup({ username, password }, navigation)}
      >
        <Text style={styles.authButtonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.authOther} onPress={() => navigation.replace(LOGIN)}>
        Click here to log in!
      </Text>
    </View>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Signup);
