import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { initializeState, getDecks } from '../utils/api';
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    initializeState().then(
      getDecks().then(decks => dispatch(fetchDecks(decks)))
    );
  }

  render() {
    const { decks } = this.props;
    const array = Object.keys(decks).map(key => decks[key]);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={array}
          keyExtractor={(item, index) => item.title}
          renderItem={({ item }) => (
            <Text key={item.title}>
              {item.title} - Num: {item.questions.length}
            </Text>
          )}
        />
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckList);
