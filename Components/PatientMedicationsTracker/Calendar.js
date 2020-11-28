import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { List, Content, Button, Text, Container, ListItem, Header, } from "native-base";

// components
import DoseMedItem from "./DoseMedItem";


const DosesList = ({ medications, navigation }) => {

  var date = new Date()
  var n = date.getDay();

  useEffect(() => {
    var dates = [];
    dates[n] = date
    for(var i = 0; i<=6; i++){
      if(i < n){
        var span = n-i;
        dates[i] = new Date(date)
        dates[i].setDate(dates[i].getDate() - span)
      }
      else if(i > n){
        var span = i-n;
        dates[i] = new Date(date)
        dates[i].setDate(dates[i].getDate() + span)
      }
    }
  },[date.getDate()])


  // Create a list of this week's dates
  var dates = [];
  dates[n] = date
  for(var i = 0; i<=6; i++){
    if(i < n){
      var span = n-i;
      dates[i] = new Date(date)
      dates[i].setDate(dates[i].getDate() - span)
    }
    else if(i > n){
      var span = i-n;
      dates[i] = new Date(date)
      dates[i].setDate(dates[i].getDate() + span)
    }
  }

  const [medicationList, setMedicationList] = useState(
    medications.map((medication) => (
      <DoseMedItem key={medication.id} medication={medication} />
    ))
  );

  const onClick = (day) => {
    // alert(dates[day]);
    setMedicationList(
      medications.map(medication => (
        <DoseMedItem key={medication.id} medication={medication} day={day} date={dates[day]} />
      )))
  }

  return (
    <Container>
      <Header>
        <Button onPress={() => onClick('0')} style={{height:50, width:50, backgroundColor:'red', borderRadius:25}}>
          <Text>S</Text>
        </Button>
        <Button onPress={() => onClick('1')} style={{height:50, width:50, backgroundColor:'red', borderRadius:25}}>
          <Text>M</Text>
        </Button>
        <Button onPress={() => onClick('2')} style={{height:50, width:50, backgroundColor:'red', borderRadius:25}}>
          <Text>T</Text>
        </Button>
        <Button onPress={() => onClick('3')} style={{height:50, width:50, backgroundColor:'red', borderRadius:25}}>
          <Text>W</Text>
        </Button>
        <Button onPress={() => onClick('4')} style={{height:50, width:50, backgroundColor:'red', borderRadius:25}}>
          <Text>T</Text>
        </Button>
        <Button onPress={() => onClick('5')} style={{height:50, width:50, backgroundColor:'red', borderRadius:25}}>
          <Text>F</Text>
        </Button>
        <Button onPress={() => onClick('6')} style={{height:50, width:50, backgroundColor:'red', borderRadius:25}}>
          <Text>S</Text>
        </Button>
      </Header>
      <Content>
        <List>
          {medicationList}
          </List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
    return {
        medications: state.medications.patientMedications
    }
}

export default connect(mapStateToProps)(DosesList);
