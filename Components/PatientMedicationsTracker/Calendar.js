import React, { useState } from "react";
import { connect } from "react-redux";
import { List, Content, Button, Text, Container, ListItem, Header, } from "native-base";

// components
import DoseMedItem from "./DoseMedItem";


const DosesList = ({ medications, navigation }) => {

  const [medicationList, setMedicationList] = useState(
    medications.map((medication) => (
      <DoseMedItem key={medication.id} medication={medication} />
    ))
  );

  // let medicationList = medications.map((medication) => (
  //   <DoseMedItem key={medication.id} medication={medication} />
  // ));

  const onClick = (day) => {
    setMedicationList(
      medications.map(medication => (
        <DoseMedItem key={medication.id} medication={medication} day={day} />
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
          {/*<ListItem>
            <Button onPress={() => navigation.navigate("AddMedication")}><Text>Add new Medication</Text></Button>
            <Button
            onPress={() => alert("track & ignore doses, coming soon")}
            >
                <Text>...</Text>
            </Button>
          </ListItem>*/}
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
