import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import {
  CALENDAR,
  DOSE,
  TRACK,
} from "../screenNames";
import Calendar from "../../Components/PatientMedicationsTracker/Calendar";
import DoseItem from "../../Components/PatientMedicationsTracker/DoseItem";
import DoseTrack from "../../Components/PatientMedicationsTracker/DoseTrack";
// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function CalanderStack({ user }) {
  return (
    <Navigator
      initialRouteName={CALENDAR}
      screenOptions={stackScreenOptions}
    >
        <Screen
        name={CALENDAR}
        component={Calendar}
        options={{ headerShown: false }}
        />
        <Screen
        name={DOSE}
        component={DoseItem}
        options={{ headerShown: false }}
        />
        <Screen
        name={TRACK}
        component={DoseTrack}
        options={{ headerShown: true }}
        />
    </Navigator>
  );
});
