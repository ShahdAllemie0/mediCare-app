import React, { useState } from "react";
// Styling Components
import { TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { Button } from "native-base";

import {
  Text,
  Input,
  Item,
  Picker,
  Icon,
  Label,
  Container,
  Content,
} from "native-base";
import styles from "./styles";
// Redux
import { connect } from "react-redux";
import { addPatientMedication } from "../../redux/actions";
// Data
import daysObj from "./daysObj";
// Components
import DaysCheckbox from "./DaysCheckbox";
import AddDoseDetail from "./AddDoseDetail";
import DoseItem from "./DoseItem";

const AddMedication = ({
  navigation,
  user,
  medications,
  addPatientMedication,
}) => {
  const [medication, setMedication] = useState("");
  const [days, setDays] = useState([]);
  const [duration, setDuration] = useState("");
  const [doses, setDoses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Components
  const options = medications.map((medication) => (
    <FlatList label={medication.trade_name} value={medication} />
  ));
  const daysOptions = daysObj.map((day) => (
    <DaysCheckbox
      day={day}
      setDays={setDays}
      days={days}
      key={day.value + day.name}
    />
  ));
  const dosesCards = doses.map((dose, index) => (
    <DoseItem
      key={dose.amount + dose.time}
      dose={dose}
      doses={doses}
      setDoses={setDoses}
      totalAmount={totalAmount}
      setTotalAmount={setTotalAmount}
    />
  ));

  // Prepare data for post action
  const jsonDoseList = () => {
    let doseList = [];
    days.forEach((day) => {
      let dayDoses = doses.map((dose) => {
        return {
          day: day.value,
          time: dose.time,
          amount: dose.amount,
        };
      });
      let temp = doseList;
      doseList = temp.concat(dayDoses);
    });
    return doseList;
  };

  const jsonDateFormat = () => {
    const begin = new Date();
    days.sort((a, b) => a.value - b.value);
    const todayDay = begin.getDay();
    let exist = days.find((day) => day.value >= todayDay);
    let delta = 0;
    if (exist) {
      delta = exist.value - todayDay;
    } else {
      delta = 7 - todayDay + days[0].value;
    }
    begin.setDate(begin.getDate() + delta);
    const formattedDate = `${begin.getFullYear()}-${
      begin.getMonth() + 1
    }-${begin.getDate()}`;
    return formattedDate;
  };

  const submitMedication = () => {
    const doseList = jsonDoseList();
    const formattedDate = jsonDateFormat();
    addPatientMedication(
      {
        medication: medication.id,
        duration: +duration,
        begin: formattedDate,
        doses: doseList,
      },
      navigation
    );
  };

  //   if(!user) navigation.replace("Login")

  return (
    <Container>
      <Content>
        <View style={styles.authContainer}>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: 300, marginTop:20 }}
              placeholder="Medications"
              placeholderStyle={{ color: "#2a7c6c", fontSize:20 }}
              placeholderIconColor="#2a7c6c"
              selectedValue={medication}
              onValueChange={setMedication}
            >
              {options}
            </Picker>
          </Item>
          <Label style={{ color: "#2a7c6c", fontSize:20, marginTop:20, borderTopWidth:1, borderTopColor:"#cce8e1"}}>Scheduling</Label>
          <Item>
            <Input
              style={styles.authTextInput}
              placeholder="Duration"
              placeholderTextColor="#75bab4"
              value={duration}
              name="duration"
              onChangeText={setDuration}
              autoCapitalize="none"
            />
          </Item>
          <View style={{width:300}}>
            {daysOptions}
          </View>
          <AddDoseDetail
            doses={doses}
            setDoses={setDoses}
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            medication={medication}
          />
          {dosesCards}
        </View>
        <Button full large style={{backgroundColor:"#2a7c6c", marginTop:10}} onPress={submitMedication}>
          <Text style={{color:"#ffffff", fontSize:25}}>Add Medication</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    medications: state.medications.medications,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPatientMedication: (newMedication, navigation) =>
      dispatch(addPatientMedication(newMedication, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMedication);
