import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFDFF",
    paddingRight: 60,
    paddingLeft: 60,
  },
  title: {
    color: "#2a7c6c",
    fontSize: 50,
    marginBottom: 50,
    borderBottomColor: "rgb(20,60,100)",
  },
  appName: {
    color: "#2a7c6c",
    fontSize: 40,
    marginTop: 50,
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
    color: "rgb(20,60,100)",
    fontSize: 16,
  },
});

export default styles;
