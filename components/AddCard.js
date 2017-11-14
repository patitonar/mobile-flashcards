import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { blue, white } from '../utils/styles';
import { connect } from 'react-redux';
import { updateDeck } from '../actions';
import { updateDeck as updateDeckApi } from '../utils/api';

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

    const newDeck = {
      title: deck.title,
      questions: [
        ...deck.questions,
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
        <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
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
  },
  button: {
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
  buttonText: {
    color: white,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default connect()(AddCard);
