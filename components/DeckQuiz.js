import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { white, blue, red, green } from '../utils/styles';
import Button from './Button';
import QuizResult from './QuizResult';
import { NavigationActions } from 'react-navigation';

class DeckQuiz extends Component {
  state = {
    index: 1,
    score: 0,
    answer: false,
    finished: false
  };

  onCorrect = () => {
    const { deck } = this.props;
    const { index } = this.state;

    if (index === deck.questions.length) {
      this.setState(state => ({
        score: state.score + 1,
        finished: true
      }));
    } else {
      this.setState(state => ({
        score: state.score + 1,
        index: state.index + 1
      }));
    }
  };

  onIncorrect = () => {
    const { deck } = this.props;
    const { index } = this.state;

    if (index === deck.questions.length) {
      this.setState(state => ({
        finished: true
      }));
    } else {
      this.setState(state => ({
        index: state.index + 1
      }));
    }
  };

  onStartAgain = () => {
    this.setState({
      index: 1,
      score: 0,
      answer: false,
      finished: false
    });
  };

  onGoBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  render() {
    const { deck } = this.props;
    const { index, answer, finished, score } = this.state;
    if (finished) {
      return (
        <QuizResult
          score={score}
          total={deck.questions.length}
          onStartAgain={this.onStartAgain}
          onGoBack={this.onGoBack}
        />
      );
    }
    const pair = deck.questions[index - 1];
    return (
      <View style={styles.parent}>
        <View>
          <Text style={styles.counter}>{`${index}/${
            deck.questions.length
          }`}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.question}>
            <Text style={styles.title}>
              {answer ? pair.answer : pair.question}
            </Text>
            <TouchableOpacity
              onPress={() =>
                this.setState(state => ({ answer: !state.answer }))
              }
            >
              <Text style={styles.toogleButton}>
                {answer ? 'Question' : 'Answer'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actions}>
            <Button
              backgroundColor={green}
              large
              onSubmit={this.onCorrect}
              text="Correct"
            />
            <Button
              backgroundColor={red}
              large
              onSubmit={this.onIncorrect}
              text="Incorrect"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: white,
    padding: 24
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
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
    fontSize: 36,
    textAlign: 'center'
  },
  toogleButton: {
    fontSize: 20,
    paddingTop: 20,
    color: blue
  },
  counter: {
    paddingBottom: 10
  }
});

function mapStateToProps(decks, { navigation }) {
  return {
    deck: decks[navigation.state.params.deck.title]
  };
}

export default connect(mapStateToProps)(DeckQuiz);
