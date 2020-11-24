import React, { useState } from "react";

// Styling Components
import { TextInput, TouchableOpacity } from "react-native";
import { Text, Input, Item, Container, Content, Form, Picker, Icon } from "native-base";
import styles from "../Authentication/styles";
import { connect } from "react-redux"
// import { addMedication } from "../../redux/actions"
import { State } from "react-native-gesture-handler";

// const AddMedication = ({ navigation, user, medications, addMedication }) => {
const AddMedication = ({ medications }) => {

  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [medication, setMedication] = useState("")
  const [city, setCity] = useState("")
  const [address_line_1, setAddressLine1] = useState("")
  const [address_line_2, setAddressLine2] = useState("")
  const [address_type, setAddressType] = useState("")

  const options = medications.map(medication => 
    <Picker.Item label={medication.trade_name} value={medication.id} />
        )

  const submitMedication = () => {
      alert(`medication id ${medication}`)
    // addMedication({
    //   first_name, last_name, phone, medication,
    //   city, address_line_1, address_line_2,
    //   address_type,
    // }, navigation);
  };

//   if(!user) navigation.replace("Login")

  return (
    <Container>
      <Content>
        <Form>
          <Text style={styles.authTitle}>Add Medication</Text>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select medication"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              selectedValue={medication}
              onValueChange={setMedication}
            >
              {options}
            </Picker>
          </Item>
          {/* <Item>
            <Input
              style={styles.authTextInput}
              placeholder="First name"
              placeholderTextColor="#A6AEC1"
              value={first_name}
              name="first_name"
              onChangeText={setFirstName}
              autoCapitalize="none"
            />
          </Item>
          <Item>
            <Input
              style={styles.authTextInput}
              placeholder="Last name"
              placeholderTextColor="#A6AEC1"
              value={last_name}
              name="last_name"
              onChangeText={setLastName}
              autoCapitalize="none"
            />
          </Item>
          <Item>
            <Input
              style={styles.authTextInput}
              placeholder="Phone"
              placeholderTextColor="#A6AEC1"
              value={phone}
              name="phone"
              onChangeText={setPhone}
              autoCapitalize="none"
            />
          </Item>
          <Item>
            <Input
              style={styles.authTextInput}
              placeholder="City"
              placeholderTextColor="#A6AEC1"
              value={city}
              name="city"
              onChangeText={setCity}
              autoCapitalize="none"
            />
          </Item>
          <Item>
            <Input
              style={styles.authTextInput}
              placeholder="Address line 1"
              placeholderTextColor="#A6AEC1"
              value={address_line_1}
              name="address_line_1"
              onChangeText={setAddressLine1}
              autoCapitalize="none"
            />
          </Item>
          <Item>
            <Input
              style={styles.authTextInput}
              placeholder="Address line 2"
              placeholderTextColor="#A6AEC1"
              value={address_line_2}
              name="address_line_2"
              onChangeText={setAddressLine2}
              autoCapitalize="none"
            />
          </Item>
          <Item>
            <Input
              style={styles.authTextInput}
              placeholder="Address type"
              placeholderTextColor="#A6AEC1"
              value={address_type}
              name="address_type"
              onChangeText={setAddressType}
              autoCapitalize="none"
            />
          </Item> */}
        </Form>
        <TouchableOpacity
          style={styles.authButton}
          onPress={submitMedication}
        >
          <Text style={styles.authButtonText}>Add</Text>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addMedication: (newMedication, navigation) =>
//       dispatch(addMedication(newMedication, navigation)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddMedication);
export default connect(mapStateToProps)(AddMedication);