import React from "react";
import { List, Content, Spinner, Container, ListItem } from "native-base";
import { connect } from "react-redux";

import HistoryItem from "./HistoryItem";

const HistoryList = ({ history, loading, navigation }) => {
  const historyCards = history.map((thishistory) => (
    <HistoryItem history={thishistory} key={thishistory.id} />
  ));

  return (
    <Container>
      <Content>
        <List>{historyCards}</List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  history: state.history.history,
});

export default connect(mapStateToProps)(HistoryList);
