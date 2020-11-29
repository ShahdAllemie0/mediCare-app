import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import {
  LOGIN,
  SIGNUP,
  CONDITIONS,
  MEDICATIONS,
  HISTORY,
  USERCONDITIONS,
  CALENDAR,
  DOSE,
  TRACK,
  ADD_MEDICATION,
  Edit_MEDICATION,
  MEDICATIONS_INTERACTIONS,
} from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
// import Conditions from "../../Components/Conditions/ConditionsList";
import PatientMedications from "../../Components/PatientMedications/MedicationList";
import History from "../../Components/History/History.js";
import Calendar from "../../Components/PatientMedicationsTracker/Calendar";
import ConditionsList from "../../Components/Conditions/ConditionsList";
import UserConditions from "../../Components/Conditions/UserConditions";
import DoseItem from "../../Components/PatientMedicationsTracker/DoseItem";
import DoseTrack from "../../Components/PatientMedicationsTracker/DoseTrack";
import AddMedication from "../../Components/PatientMedications/AddMedication";
import EditMedication from "../../Components/PatientMedications/EditMedication";
import MedicationInteractions from "../../Components/PatientMedications/MedicationInteractions";
// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function UserStack({ user }) {
  return (
    <Navigator
      initialRouteName={user ? USERCONDITIONS : LOGIN}
      screenOptions={stackScreenOptions}
    >
      {user ? (
        <>
          <Screen
            name={USERCONDITIONS}
            component={UserConditions}
            options={{ headerShown: false }}
          />
          <Screen
            name={HISTORY}
            component={History}
            options={{ title: "History" }}
          />
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
            name={CONDITIONS}
            component={ConditionsList}
            options={{ headerShown: false }}
          />
          <Screen
            name={CALENDAR}
            component={Calendar}
            options={{ headerShown: false }}
          />
          <Screen
            name={MEDICATIONS_INTERACTIONS}
            component={MedicationInteractions}
          />
          <Screen
            name={DOSE}
            component={DoseItem}
            options={{ headerShown: false }}
          />
          <Screen
            name={TRACK}
            component={DoseTrack}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name={SIGNUP}
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Navigator>
  );
});
