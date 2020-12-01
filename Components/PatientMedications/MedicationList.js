import React from "react";
import { connect } from "react-redux";
import { List, Content, Button, Text, Container, ListItem, Left, Icon } from "native-base";
import { ADD_MEDICATION } from "../../Navigation/screenNames";
import { View } from "react-native";

// components
import MedicationCard from "./MedicationItem";

const MedicationList = ({ medications, navigation }) => {
  // send one item from list to display in card
  const medicationList = medications.map((medication) => (
    <MedicationCard key={medication.id} medication={medication} navigation={navigation}/>
  ));

  return (
    <Container style={{
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column',
      flex: 1
    }}>
      <Content>

        <List>
          {medicationList}
          </List>

      </Content>
      <Button
      iconRight
      onPress={() => navigation.navigate(ADD_MEDICATION)}
      style={{
        backgroundColor:"#2a7c6c",
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 35,
        padding:20,
        width:70,
        height:70,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Icon name='add' iconSize="100" />
      </Button>

    </Container>
  );
};

const mapStateToProps = (state) => {
    return {
        medications: state.medications.patientMedications
    }
}

export default connect(mapStateToProps)(MedicationList);
