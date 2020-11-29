import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";
import {
  logout,
  setUserConditions,
  deleteUserConditions,
  fetchUserConditions,
} from "../../redux/actions";
const ConditionItem = ({
  condition,
  setUserConditions,
  userConditions,
  deleteUserConditions,
  fetchUserConditions,
}) => {
  const condition_id = condition.id;
  const [check, setCheck] = useState(false);
  useEffect(() => {
    fetchUserConditions();
    let element = userConditions.userConditions.conditions.find(
      (e) => e.id == condition.id
    );
    if (element) {
      if (!check) {
        setCheck(true);
      }
    }
  }, []);

  const onClick = () => {
    setCheck(!check);
    if (!check) {
      setUserConditions({ condition_id });
    } else if (check) {
      deleteUserConditions({ condition_id });
    }
  };

  return (
    <CheckBox
      disabled={true}
      title={condition.name}
      checked={check}
      onIconPress={onClick}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    userConditions: state.userConditions,
  };
};

const mapDispatchToProps = {
  logout,
  setUserConditions,
  deleteUserConditions,
  fetchUserConditions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConditionItem);
