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
    <Container>
    <Content>

      <List>
        {medicationList}
        </List>

    </Content>

      <Button
      onPress={() => navigation.navigate(ADD_MEDICATION)}
      style={{
        backgroundColor:"#2a7c6c",
        position: 'absolute',
        bottom: 20,
        right:20,
        padding:20,
        width:70,
        height:70,
        borderRadius: 45,
        justifyContent: "center",
      }}
      >
        <Icon name='add' style={{marginLeft: 0, marginRight: 0, fontSize: 40}} />
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
