import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { addNewDeck } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';
import { white } from '../utils/styles';
import Button from './Button';

class NewDeck extends Component {
  state = {
    text: ''
  };

  onSubmit = () => {
    const { text } = this.state;

    if (text === '') {
      return;
    }

    this.props.dispatch(addDeck(text));
    addNewDeck(text);

    this.setState(() => ({ text: '' }));

    this.props.navigation.dispatch(NavigationActions.back({ key: 'NewDeck' }));
  };

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
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
  title: {
    marginTop: 20,
    fontSize: 36,
    textAlign: 'center'
  },
  input: {
    paddingTop: 20,
    alignSelf: 'stretch',
    height: 80,
    fontSize: 24
  }
});

export default connect()(NewDeck);
