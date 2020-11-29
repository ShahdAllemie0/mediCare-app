import React from "react";
import { connect } from "react-redux";
import { List, Content, Button, Text, Container, ListItem } from "native-base";
import { ADD_MEDICATION } from "../../Navigation/screenNames"

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
          <ListItem>
            <Button
            onPress={() => navigation.navigate(ADD_MEDICATION)}
            >
                <Text>Add new Medication</Text>
            </Button>
          </ListItem>
          </List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
    return {
        medications: state.medications.patientMedications
    }
}

export default connect(mapStateToProps)(MedicationList);