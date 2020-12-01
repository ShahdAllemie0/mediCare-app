import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import {
  MEDICATIONS,
  ADD_MEDICATION,
  Edit_MEDICATION,
  MEDICATIONS_INTERACTIONS,
} from "../screenNames";
import PatientMedications from "../../Components/PatientMedications/MedicationList";
import AddMedication from "../../Components/PatientMedications/AddMedication";
import EditMedication from "../../Components/PatientMedications/EditMedication";
import MedicationInteractions from "../../Components/PatientMedications/MedicationInteractions";
// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function MedicationStack({ user }) {
  return (
    <Navigator
      initialRouteName={MEDICATIONS}
      screenOptions={stackScreenOptions}
    >
        <Screen
        name={ADD_MEDICATION}
        component={AddMedication}
        options={{ headerShown: false }}
        />
        <Screen
        name={Edit_MEDICATION}
        component={EditMedication}
        options={{ headerShown: false }}
        />
        <Screen
        name={MEDICATIONS}
        component={PatientMedications}
        options={{ title: "Medications" }}
        />
        <Screen
        name={MEDICATIONS_INTERACTIONS}
        component={MedicationInteractions}
        />
    </Navigator>
  );
});