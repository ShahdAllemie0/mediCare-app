import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

const DaysCheckbox = ({ day, setDays }) => {
      const [checked, setChecked] = useState(false);
      const [days, setDays] = useState([]);
  
      const handlePress = () => {
        setChecked(!checked);
        new_days = [day,...days]
        setDays(day.value);
        if (!checked) {
          
        } else if (checked) {
          
        }
      };
      return (
        <>
          <CheckBox
            disabled={true}
            title={day.name}
            checked={checked}
            onIconPress={handlePress}
          />
        </>
      );
    };

    export default DaysCheckbox;