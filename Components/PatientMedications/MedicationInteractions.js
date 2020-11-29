import React from "react";
import { connect } from "react-redux";
import { List, Content, Button, Text, Container, ListItem } from "native-base";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "../Authentication/styles";
import { MEDICATIONS } from "../../Navigation/screenNames"
import { deleteMedication } from "../../redux/actions"

// components
import InteractionCard from "./InteractionItem";

const MedicationInteractions = ({ medications, navigation, medicationAndInteractions, deleteMedication }) => {
  
  const medication = medications[medications.length-1]
  const drugDrugInteractions = medicationAndInteractions.drug_drug_interactions
  const drugDrugTimeInteractions = medicationAndInteractions.drug_drug_time_interactions
  const drugDiseaseInteractions = medicationAndInteractions.drug_disease_interactions
  // send one item from list to display in card
  const drugDrugInteractionsList = drugDrugInteractions?.map((medication) => (
    <InteractionCard key={medication.id} medication={medication} navigation={navigation}/>
  ));

  const drugDrugTimeInteractionsList = drugDrugTimeInteractions?.map((medication) => (
    <InteractionCard key={medication.id} medication={medication} navigation={navigation}/>
  ));

  const drugDiseaseInteractionsList = drugDiseaseInteractions?.map((condition) => (
  <Text>- {condition.name}</Text>
  ));

  return (
    <Container>
      <Content>
      <InteractionCard key={medication.id} medication={medication} navigation={navigation}/>
        {drugDrugInteractions && 
        <>
        <Text>Taking these medications with {medication.medication.trade_name} 
        produce severe interactions, you should consult your doctor</Text>
        <List>
          {drugDrugInteractionsList}
          </List>
          </>
          }
          {drugDrugTimeInteractions && 
          <>
          <Text>You shouldn't take these medications with {medication.medication.trade_name} in the same time</Text>
          <List>
          {drugDrugTimeInteractionsList}
          </List>
          </>
          }
          {drugDiseaseInteractions &&
          <>
          <Text>There is interaction with your medical condition</Text>
          {drugDiseaseInteractionsList}
          </>
          }
          <TouchableOpacity
          style={styles.authButton}
          onPress={() => navigation.navigate(MEDICATIONS)}
        >
          <Text style={styles.authButtonText}>I consult my doctor ignore notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => deleteMedication(medication.id, navigation)}
        >
          <Text style={styles.authButtonText}>Remove {medication.medication.trade_name}</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
    return {
        medicationAndInteractions: state.medications.medicationAndInteractions,
        medications: state.medications.patientMedications,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMedication: (medicationID, navigation) => 
      dispatch(deleteMedication(medicationID, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicationInteractions);