import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 30,
    padding: 20,
    backgroundColor: "#2a7c6c",

    borderRadius: 25,
  },
  authButtonText: {
    color: "#FFFFFF",
    // fontWeight: "bold",
    fontSize: 18,
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authOther: {
    color: "#2a7c6c",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "#2a7c6c",
    borderBottomColor: "#2a7c6c",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "#75bab4",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "rgb(20,60,100)",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "#2a7c6c",
    fontSize: 16,
  },
  appName: {
    textAlign: "center",
    color: "#2a7c6c",
    fontSize: 30,
    marginTop:20,
    marginBottom: 50,
  },
});

export default styles;
