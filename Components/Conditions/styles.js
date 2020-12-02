import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 30,
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
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authOther: {
    color: "rgb(20,60,100)",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "rgb(20,60,100)",
    borderBottomColor: "rgb(20,60,100)",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "#2a7c6c",
    fontSize: 24,
    paddingTop: 20,
    textAlign:"center",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "rgb(20,60,100)",
    fontSize: 16,
  },
});

export default styles;
