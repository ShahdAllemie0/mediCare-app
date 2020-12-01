import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  List,
  Content,
  Button,
  Text,
  Container,
  ListItem,
  Header,
} from "native-base";

// components
import DoseMedItem from "./DoseMedItem";

const DosesList = ({ medications, navigation }) => {
  var date = new Date();
  var n = date.getDay();

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
        />
      ))
    );
  }, [medications]);
  const onClick = (day) => {
    // alert(dates[day]);
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

  return (
    <Container>
      <Header>

      {n==0 ?
        (<Button
        onPress={() => onClick("0")}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "#2a7c6c",
          borderRadius: 25,
        }}
      >
        <Text>S</Text>
      </Button>):
      (<Button
      onPress={() => onClick("0")}
      style={{
        height: 50,
        width: 50,
        backgroundColor: "#75BAB4",
        borderRadius: 25,
      }}
      >
      <Text>S</Text>
      </Button>)
      }

        {n==1 ?
          (<Button
          onPress={() => onClick("1")}
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#2a7c6c",
            borderRadius: 25,
          }}
        >
          <Text>M</Text>
        </Button>):
        (<Button
        onPress={() => onClick("1")}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "#75BAB4",
          borderRadius: 25,
        }}
      >
        <Text>M</Text>
      </Button>)
      }



        {n==2 ?
          (<Button
          onPress={() => onClick("2")}
          style={{
            height: 50,
            width: 50,
            backgroundColor: "#2a7c6c",
            borderRadius: 25,
          }}
        >
          <Text>T</Text>
        </Button>):
        (<Button
        onPress={() => onClick("2")}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "#75BAB4",
          borderRadius: 25,
        }}
      >
        <Text>T</Text>
      </Button>)
      }

      {n==3 ?
        (<Button
        onPress={() => onClick("3")}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "#2a7c6c",
          borderRadius: 25,
        }}
      >
        <Text>W</Text>
      </Button>):
      (<Button
      onPress={() => onClick("3")}
      style={{
        height: 50,
        width: 50,
        backgroundColor: "#75BAB4",
        borderRadius: 25,
      }}
    >
      <Text>W</Text>
    </Button>)
    }


    {n==4 ?
      (<Button
      onPress={() => onClick("4")}
      style={{
        height: 50,
        width: 50,
        backgroundColor: "#2a7c6c",
        borderRadius: 25,
      }}
    >
      <Text>T</Text>
    </Button>):
    (<Button
    onPress={() => onClick("4")}
    style={{
      height: 50,
      width: 50,
      backgroundColor: "#75BAB4",
      borderRadius: 25,
    }}
  >
    <Text>T</Text>
  </Button>)
  }


  {n==5 ?
    (<Button
    onPress={() => onClick("5")}
    style={{
      height: 50,
      width: 50,
      backgroundColor: "#2a7c6c",
      borderRadius: 25,
    }}
  >
    <Text>F</Text>
  </Button>):
  (<Button
  onPress={() => onClick("5")}
  style={{
    height: 50,
    width: 50,
    backgroundColor: "#75BAB4",
    borderRadius: 25,
  }}
>
  <Text>F</Text>
</Button>)
}


{n==6 ?
  (<Button
  onPress={() => onClick("6")}
  style={{
    height: 50,
    width: 50,
    backgroundColor: "#2a7c6c",
    borderRadius: 25,
  }}
>
  <Text>S</Text>
</Button>):
(<Button
onPress={() => onClick("6")}
style={{
  height: 50,
  width: 50,
  backgroundColor: "#75BAB4",
  borderRadius: 25,
}}
>
<Text>S</Text>
</Button>)
}

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
