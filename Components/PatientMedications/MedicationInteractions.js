import React from "react";
import { connect } from "react-redux";
import { List, Content, Button, Text, Container, ListItem, Card, CardItem, Left, Body } from "native-base";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "../Authentication/styles";
import { MEDICATIONS } from "../../Navigation/screenNames";
import { deleteMedication } from "../../redux/actions";

// components
import InteractionCard from "./InteractionItem";

const MedicationInteractions = ({
  medications,
  navigation,
  medicationAndInteractions,
  deleteMedication,
}) => {
  const medication = medications[medications.length - 1];
  const drugDrugInteractions = medicationAndInteractions.drug_drug_interactions;
  const drugDrugTimeInteractions =
    medicationAndInteractions.drug_drug_time_interactions;
  const drugDiseaseInteractions =
    medicationAndInteractions.drug_disease_interactions;
  // send one item from list to display in card
  const drugDrugInteractionsList = drugDrugInteractions?.map((medication) => (
    <InteractionCard
      key={medication.id}
      medication={medication}
      navigation={navigation}
    />
  ));

  const drugDrugTimeInteractionsList = drugDrugTimeInteractions?.map(
    (medication) => (
      <InteractionCard
        key={medication.id}
        medication={medication}
        navigation={navigation}
      />
    )
  );

  const drugDiseaseInteractionsList = drugDiseaseInteractions?.map(
    (condition) => (

      <ListItem
        button
      >
        <Content>
          <Card>
            <CardItem header>
              <Left>
                <Body>
                  <Text
                    style={{ color: "#2a7c6c", fontSize: 20, fontWeight: "bold", textAlign:"center" }}
                  >
                    {condition.name}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </ListItem>

    )
  );

  return (
    <Container>
      <Content>
        <Text style={{fontSize:20, color:"#2a7c6c", paddingTop:20, textAlign:"center", fontWeight:"bold"}}>You're trying to add</Text>
        <InteractionCard
          key={medication.id}
          medication={medication}
          navigation={navigation}
        />
        {drugDrugInteractions && (
          <>
            <Text style={{textAlign:"center", color:"#2a7c6c", padding:8}}>
              But consuming {medication.medication.trade_name} with the following list of medications
              produce severe interactions, you should consult your doctor
            </Text>
            <List>{drugDrugInteractionsList}</List>
          </>
        )}
        {drugDrugTimeInteractions && (
          <>
            <Text style={{textAlign:"center", color:"#2a7c6c", padding:8}}>
              But you shouldn't consume {medication.medication.trade_name} with the following list of medications
              at the same time
            </Text>
            <List>{drugDrugTimeInteractionsList}</List>
          </>
        )}
        {drugDiseaseInteractions && (
          <>
            <Text style={{textAlign:"center", color:"#2a7c6c", padding:8}}>{medication.medication.trade_name} interact with your following medical condition/s</Text>
            {drugDiseaseInteractionsList}
          </>
        )}
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => navigation.navigate(MEDICATIONS)}
        >
          <Text style={styles.authButtonText}>
            I consulted my doctor ignore interactions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => deleteMedication(medication.id, navigation)}
        >
          <Text style={styles.authButtonText}>
            Cancel {medication.medication.trade_name.toLowerCase()} addition
          </Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    medications: state.medications.patientMedications,
    medicationAndInteractions: state.medications.medicationAndInteractions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMedication: (medicationID, navigation) =>
      dispatch(deleteMedication(medicationID, navigation)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MedicationInteractions);
