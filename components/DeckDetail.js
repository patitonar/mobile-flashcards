import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, blue } from '../utils/styles';

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
          <TouchableOpacity
            style={styles.addCard}
            onPress={() => this.props.navigation.navigate('AddCard', { deck })}
          >
            <Text style={styles.addCardText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.quiz}
            onPress={() => this.props.navigation.navigate('DeckQuiz', { deck })}
          >
            <Text style={styles.quizText}>Start Quiz</Text>
          </TouchableOpacity>
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
  },
  addCard: {
    backgroundColor: white,
    marginTop: 30,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: blue,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addCardText: {
    color: blue,
    fontSize: 16,
    textAlign: 'center'
  },
  quiz: {
    backgroundColor: blue,
    marginTop: 30,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quizText: {
    color: white,
    fontSize: 16,
    textAlign: 'center'
  }
});

function mapStateToProps(decks, { navigation }) {
  return {
    deck: decks[navigation.state.params.deck.title]
  };
}

export default connect(mapStateToProps)(DeckDetail);
