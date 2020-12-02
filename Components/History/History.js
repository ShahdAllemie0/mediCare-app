import React from "react";
import { List, Content, Spinner, Container, ListItem, Text } from "native-base";
import { connect } from "react-redux";

import HistoryItem from "./HistoryItem";

const HistoryList = ({ history, loading, navigation }) => {
  const historyCards = history.map((thishistory) => (
    <HistoryItem history={thishistory} key={thishistory.id} />
  ));

  return (
    <Container>
      <Content >
      {history.length? (
          <List>{historyCards}</List>
        ):(
          <Text style={{ textAlign:"center", padding:30, color: "#C0C0C0", fontSize: 20, fontWeight: "bold" }}
          >
            No history
            </Text>
        )}
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  history: state.history.history,
});

export default connect(mapStateToProps)(HistoryList);
