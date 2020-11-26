import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { Item } from "native-base";

const DaysCheckbox = ({ day, setDays, days }) => {
      const [checked, setChecked] = useState(false);
  
      const handlePress = () => {
        setChecked(!checked);
        if (!checked) {
          new_days = [day,...days]
          setDays(new_days);
        } else if (checked) {
          new_days = days.filter(element => element !== day)
          setDays(new_days)
        }
      };
      return (
        <Item>
          <CheckBox
            disabled={true}
            title={day.name}
            checked={checked}
            onIconPress={handlePress}
          />
        </Item>
      );
    };

    export default DaysCheckbox;