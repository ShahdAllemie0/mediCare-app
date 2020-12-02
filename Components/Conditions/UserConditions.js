import React from "react";
// Screens
import { CONDITIONS } from "../../Navigation/screenNames";
// Redux
import { connect } from "react-redux";
// Components
import LogoutButton from "../Authentication/LogoutButton";
import History from "../History/History";
import { logout, fetchUserConditions } from "../../redux/actions";
import { TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text, Card, CardItem, Left, Body, Button, Icon } from "native-base";
// Style
import styles from "./styles";

const UserConditions = ({
  logout,
  userConditions,
  navigation,
  fetchUserConditions,
}) => {
  let userConditionsList = null;
  if (userConditions.userConditions.conditions == null) {
    fetchUserConditions();
  } else {
    userConditionsList = userConditions.userConditions.conditions.map(
      (condition) => {
        return (
          <Card>
            <CardItem header>
              <Left>
                <Body>
                  <Text style={{ color: "#2a7c6c", textAlign:"center", fontSize:19 }}>
                    {condition.name}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        );
      }
    );
  }
  return (
    <>
    <View style={styles.authContainer}>
    <View style={{width:400}}>
      <Text style={styles.authTitle} onPress={() => navigation.navigate(CONDITIONS)}>{`Your Medical Conditions \t\t`}
        <Icon name='ios-create' style={{fontSize: 30, color:"#2a7c6c"}} onPress={() => navigation.navigate(CONDITIONS)}/>
      </Text>
      {userConditionsList}
    </View>
    <View style={{borderTopWidth:0.5, borderColor:"#cce8e1", width:500, marginTop:30}}>
    <Text style={styles.authTitle}>Your Medication's History</Text>
    </View>

    </View>
    <History />




      <LogoutButton logout={logout} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userConditions: state.userConditions,
  };
};

const mapDispatchToProps = {
  logout,
  fetchUserConditions,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserConditions);
