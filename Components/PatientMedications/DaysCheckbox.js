import React, { useState, useEffect } from "react";
import { CheckBox } from "react-native-elements";
import { Item } from "native-base";

const DaysCheckbox = ({ day, setDays, days }) => {
      const [checked, setChecked] = useState(false);

      useEffect(() => {
        days.forEach( myDay => {
          if(myDay == day){
            setChecked(true)
          } })
        }, []);

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
          <CheckBox
            disabled={true}
            title={day.name}
            checked={checked}
            onIconPress={handlePress}
          />
      );
    };

    export default DaysCheckbox;
