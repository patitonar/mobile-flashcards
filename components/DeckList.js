import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { initializeState, getDecks } from '../utils/api';

class DeckList extends Component {
  state = { decks: {} };
  componentDidMount() {
    initializeState().then(getDecks().then(decks => this.setState({ decks })));
  }

  render() {
    const { decks } = this.state;
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

export default DeckList;
