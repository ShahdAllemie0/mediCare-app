import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { List, Content, Text, Container, View, Header } from "native-base";

// components
import DoseMedItem from "./DoseMedItem";
import { FlatList, StyleSheet, TouchableOpacity, Animated } from "react-native";

const DosesList = ({ medications, navigation }) => {
  var date = new Date();
  const [day, setDay] = useState();
  var n = date.getDay();
  var dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Create a list of this week's dates
  var dates = [];
  dates[n] = date;
  for (var i = 0; i <= 6; i++) {
    if (i < n) {
      var span = n - i;
      dates[i] = new Date(date);
      dates[i].setDate(dates[i].getDate() - span);
    } else if (i > n) {
      var span = i - n;
      dates[i] = new Date(date);
      dates[i].setDate(dates[i].getDate() + span);
    }
  }

  const [medicationList, setMedicationList] = useState();
  useEffect(() => {
    setMedicationList(
      medications.map((medication) => (
        <DoseMedItem
          key={medication.id}
          medication={medication}
          navigation={navigation}
          day={n}
          date={dates[n]}
          navigation={navigation}
          medicationID={medication.id}
        />
      ))
    );
  }, [medications]);
  const onClick = (day) => {
    setDay(day);
    setMedicationList(
      medications.map((medication) => (
        <DoseMedItem
          key={medication.id}
          medication={medication}
          day={day}
          date={dates[day]}
          navigation={navigation}
          medicationID={medication.id}
        />
      ))
    );
  };
  let flatListRef;
  return (
    <Container>
      <Header style={{ backgroundColor: "#75bab4" }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          bounces={false}
          data={dayList}
          decelerationRate={20}
          snapToInterval={100}
          ref={(ref) => {
            flatListRef = ref;
          }}
          keyExtractor={(item) => item}
          contentContainerStyle={{ alignItems: "center" }}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    onClick(index);
                  }}
                >
                  <Text
                    style={{
                      ...styles.text,
                      color: day == index ? "white" : "#2a7c6c",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        ></FlatList>
      </Header>
      <Content>
        <List>{medicationList}</List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    medications: state.medications.patientMedications,
  };
};

export default connect(mapStateToProps)(DosesList);

const styles = StyleSheet.create({
  text: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});
