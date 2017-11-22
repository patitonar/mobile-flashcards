import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { white } from '../utils/styles';
import Button from './Button';

class DeckDetail extends Component {
  render() {
    const { deck } = this.props;
    return (
      <View style={styles.details}>
        <View style={styles.deck}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.subtitle}>
            {deck.questions ? deck.questions.length : 0} cards
          </Text>
        </View>
        <View style={styles.actions}>
          <Button
            secondary
            onSubmit={() => this.props.navigation.navigate('AddCard', { deck })}
            text="Add Card"
          />
          {deck.questions &&
            deck.questions.length > 0 && (
              <Button
                onSubmit={() =>
                  this.props.navigation.navigate('DeckQuiz', { deck })
                }
                text="Start Quiz"
              />
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    backgroundColor: white,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deck: {
    flex: 1,
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actions: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30
  },
  title: {
    fontSize: 36
  },
  subtitle: {
    fontSize: 24
  }
});

function mapStateToProps(decks, { navigation }) {
  return {
    deck: decks[navigation.state.params.deck.title]
  };
}

export default connect(mapStateToProps)(DeckDetail);
