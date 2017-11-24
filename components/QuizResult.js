import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white, blue } from '../utils/styles';
import Button from './Button';

const QuizResult = ({ score, total, onStartAgain, onGoBack }) => {
  return (
    <View style={styles.details}>
      <View style={styles.deck}>
        <Text style={styles.title}>{`${score}/${total}`}</Text>
      </View>
      <View style={styles.actions}>
        <Button secondary onSubmit={onGoBack} text="Go Back" />
        <Button onSubmit={onStartAgain} text="Try Again" />
      </View>
    </View>
  );
};

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

export default QuizResult;
