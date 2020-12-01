// Form with anount and time picker
import React, { useState } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text, Item } from "native-base";
import { Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";

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
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`
    setTime(formattedTime);
  };

  return (
    <>
      <Text style={styles.authTitle}>Dose details</Text>
      <Button onPress={showTimepicker} title="Select time" />
      <Text style={styles.authTitle}>{time}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleChange}
        />
      )}
      <Item>
        <TextInput
          style={styles.authTextInput}
          placeholder="Enter number of pills/day"
          placeholderTextColor="#A6AEC1"
          value={amount}
          onChangeText={setAmount}
          autoCapitalize="none"
        />
      </Item>
      <Button
        title={"Add dose"}
        button
        style={styles.authButton}
        onPress={onSubmit}
      ></Button>
    </>
  );
};

export default AddDoseDetail;
