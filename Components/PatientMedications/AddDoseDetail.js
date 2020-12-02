// Form with anount and time picker
import React, { useState } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text, Item, Button } from "native-base";
// import { Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";
import Modal from "react-native-modal"
import { FontAwesome } from '@expo/vector-icons'; 

const AddDoseDetail = ({
  setDoses,
  doses,
  totalAmount,
  setTotalAmount,
  medication,
}) => {
  const initialDate = new Date()
  const [date, setDate] = useState(new Date(1598051730000));
  const [time, setTime] = useState(`${initialDate.getHours()}:${initialDate.getMinutes()}`);
  const [amount, setAmount] = useState("");
  const [show, setShow] = useState(false);

  const onSubmit = () => {
    const total = totalAmount + (+amount);
    if (total <= medication.max_intake) {
      new_dose = { time: time, amount: +amount };
      new_doses = [...doses, new_dose];
      setTotalAmount(total);
      setDoses(new_doses);
    } else {
      alert(
        `you exceced the maximum intake by ${total - medication.max_intake}`
      );
    }
  };

  const showTimepicker = () => {
    setShow(true);
  };

  const handleChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`
    setTime(formattedTime);
  };

  const setIosAndroidPicker = () => {
    if(Platform.OS === "ios"){
      return (
          <Modal 
        isVisible = {show}
      >
        <View style={{backgroundColor:'#fff'}}>
        <FontAwesome style={{margin:10}} onPress={() => setShow(false)} name="close" size={24} color="#2a7c6c" />
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            display="default"
            onChange={handleChange}
          />
        </View>
        
      </Modal>
    )} else {
      return (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleChange}
        />
      )
    }
    
  }

  return (
    <View style={{width:300, alignItems:"center", borderTopWidth:1, borderTopColor:"#cce8e1"}}>
      <Text style={styles.authTitle}>Dose details</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Enter number of pills/day"
          placeholderTextColor="#2a7c6c"
          value={amount}
          onChangeText={setAmount}
          autoCapitalize="none"
        />
      <Text style={{color:"#2a7c6c", fontSize:22, marginBottom:5}}>{time}</Text>
      <Button block style={{backgroundColor:"#75bab4"}} onPress={showTimepicker}><Text style={{textColor:"#75bab4"}}>Choose time</Text></Button>
      {show && (setIosAndroidPicker())}
      <Button
        block
        style={{backgroundColor:"#2a7c6c", marginTop:5}}
        onPress={onSubmit}
      ><Text>Add Dose</Text></Button>
    </View>
  );
};

export default AddDoseDetail;
