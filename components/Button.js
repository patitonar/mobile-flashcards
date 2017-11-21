import React, { Component } from 'react';
import { blue, white } from '../utils/styles';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={this.props.secondary ? styles.secondary : styles.primary}
        onPress={this.props.onSubmit}
      >
        <Text
          style={
            this.props.secondary ? styles.secondaryText : styles.primaryText
          }
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  secondary: {
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
  secondaryText: {
    color: blue,
    fontSize: 16,
    textAlign: 'center'
  },
  primary: {
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
  primaryText: {
    color: white,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Button;
