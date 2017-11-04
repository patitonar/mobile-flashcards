import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { addNewDeck } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';

class NewDeck extends Component {
  state = {
    text: ''
  };

  onSubmit = () => {
    const { text } = this.state;

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
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 24,
    margin: 5,
    alignItems: 'center',
    elevation: 3
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
  },
  button: {
    backgroundColor: '#2196f3',
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
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default connect()(NewDeck);
