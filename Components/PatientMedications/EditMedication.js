import React, { useState } from "react";
// Styling Components
import { TouchableOpacity, View } from "react-native";
import { Text, Input, Item, Picker, Icon, Label, Container, Content } from "native-base";
import styles from "../Authentication/styles";
// Redux
import { connect } from "react-redux"
import { updatePatientMedication, deleteMedication, addDose, deleteDose } from "../../redux/actions"
// Data
import daysObj from "./daysObj"
// Components
import DaysCheckbox from "./DaysCheckbox"
import AddDoseDetail from "./AddDoseDetail"
import DoseItem from "./DoseItem";


const EditMedication = ({ navigation, user, route, updatePatientMedication, deleteMedication, addDose, deleteDose }) => {
    const { medication } = route.params
    const initialDays = daysObj.filter(day => medication.doses.find(dose => dose.day == day.value ))
    const initialDoses = medication.doses.filter(dose => dose.day == initialDays[0].value)
    const initialTotalAmount = medication.doses.reduce((result, dose) => result + dose.amount ,0)

  const [days, setDays] = useState(initialDays);
  const [duration, setDuration] = useState(medication.duration.toString());
  const [doses, setDoses] = useState(initialDoses); 
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount)

  // Components
  const daysOptions = daysObj.map((day, index) => 
    <DaysCheckbox key={index} day={day} setDays={setDays} days={days}/>
    )
  const dosesCards = doses.map((dose, index) => {
    return (
        <DoseItem key={index} dose={dose} doses={doses} setDoses={setDoses} 
        totalAmount={totalAmount} setTotalAmount={setTotalAmount}/>
    )
    })
  
  // Prepare data for post action
  const jsonDoseList = (myDays=days, myDoses=doses) => {
    let doseList = []
    myDays.forEach(day => {
      let dayDoses = myDoses.map( dose => { 
      return { 
        medication: medication.id,
        day: day.value.toString(), 
        time: dose.time, 
        amount: dose.amount 
      }})
      let temp = doseList
      doseList = temp.concat(dayDoses) 
    })
    return doseList
  }

  const submitMedication = () => {
    let doseList = []
    const newDays = days.filter(day => !initialDays.includes(day))
    const newDoses = doses.filter(dose => !initialDoses.includes(dose))
    const notChangedDays = days.filter(day => initialDays.includes(day))
    const deletedDays = initialDays.filter(day => !days.includes(day))
    const deletedDoses = initialDoses.filter(dose => deletedDays.some(day => dose.day == day.value))
    if(newDays){
        // 1) delete current doses
        if(deletedDoses){
          deletedDoses.forEach(dose => deleteDose(dose.id))
        }
        // 2) create new doses
        doseList = jsonDoseList(newDays)
        doseList.forEach(dose => addDose(dose))
    } 
    if(newDoses){
      // 1) create new dose for each day
      doseList = jsonDoseList(notChangedDays, newDoses)
      doseList.forEach(dose => addDose(dose))
    }

    updatePatientMedication({ duration: +duration }, medication.id, navigation);
    
  };

//   if(!user) navigation.replace("Login")

  return (
    
    <Container>
      <Content> 
        <View style={styles.authContainer}>
          <Text style={styles.authTitle}>Add Medication</Text>
          <Label>Schedualing</Label>
          <Item>
            <Input
              style={styles.authTextInput}
              placeholder="Duration"
              placeholderTextColor="#A6AEC1"
              value={duration}
              name="duration"
              onChangeText={setDuration}
              autoCapitalize="none"
            />
          </Item>
            {daysOptions}
            <AddDoseDetail doses={doses} setDoses={setDoses} 
            totalAmount={totalAmount} setTotalAmount={setTotalAmount}
            medication={medication.medication}
            />
          {dosesCards}
        </View>
        <TouchableOpacity
          style={styles.authButton}
          onPress={submitMedication}
        >
          <Text style={styles.authButtonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => deleteMedication(medication.id, navigation)}
        >
          <Text style={styles.authButtonText}>Delete</Text>
        </TouchableOpacity>
        </Content>
    </Container>
        
      
  );
};

const mapStateToProps = (state) => {
    return ({
        user: state.user,
        medications: state.medications.medications
    })
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePatientMedication: ( newMedication, medicationID, navigation) =>
      dispatch(updatePatientMedication( newMedication, medicationID, navigation)),
    deleteMedication: (medicationID, navigation) => 
      dispatch(deleteMedication(medicationID, navigation)),
    deleteDose: (doseID) => dispatch(deleteDose(doseID)),
    addDose: (dose) => dispatch(addDose(dose)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMedication);