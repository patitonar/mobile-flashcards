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
      <View style={{ flex: 1 }}>
        <FlatList
          data={array}
          keyExtractor={(item, index) => item.title}
          renderItem={({ item }) => (
            <View key={item.title} style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>
                {item.questions ? item.questions.length : 0} cards
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 24,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,

    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  title: {
    fontSize: 24
  },
  subtitle: { fontSize: 14 }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckList);
