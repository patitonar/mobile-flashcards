import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { white } from '../utils/styles';
import { connect } from 'react-redux';
import { updateDeck } from '../actions';
import { updateDeck as updateDeckApi } from '../utils/api';
import Button from './Button';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  onSubmit = () => {
    const { question, answer } = this.state;

    if (question === '' || answer === '') {
      return;
    }
    const { navigation } = this.props;
    const { deck } = navigation.state.params;

    const previousQuestions = deck.questions || [];

    const newDeck = {
      title: deck.title,
      questions: [
        ...previousQuestions,
        {
          question,
          answer
        }
      ]
    };

    this.props.dispatch(updateDeck(newDeck));
    updateDeckApi(newDeck);

    this.setState(() => ({ question: '', answer: '' }));

    navigation.goBack();
  };

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          style={styles.input}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          placeholder="Question"
        />
        <TextInput
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          placeholder="Answer"
        />
        <Button onSubmit={this.onSubmit} text="SUBMIT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: white,
    borderRadius: 2,
    padding: 24,
    alignItems: 'center'
  },
  input: {
    paddingTop: 20,
    alignSelf: 'stretch',
    height: 80,
    fontSize: 16
  }
});

export default connect()(AddCard);
