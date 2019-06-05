import React, { Component } from 'react';
const unirest = require('unirest');
import { StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button.js';
import axios from 'axios';

class Apology extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: 'enter text here', 
      answer: ''
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }; //end of constructor

  static navigationOptions = {
    title: 'Apology Whiz',
    headerStyle: { backgroundColor: 'lavender' },
    headerTitleStyle: { color: 'rgb(119, 96, 141)', fontSize: 24 },
  };

  async onButtonPress() {
    unirest.get("https://hudelabs-qriusity-v1.p.rapidapi.com/v1/questions?page=1&limit=10")
.header("X-RapidAPI-Key", "06a491441bmsh23d1e58c9e15ff4p1c6be7jsnf92e68e6281b")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
})
    .catch((error) => {
      // console.error(error);
      this.setState({
        answer: 'oops... something went wrong :('
      });
      return this.state.answer;
    });
  };//end of function onButtonPress

  render() {

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View
          style={styles.div}>
          <Text
            style={styles.text}>What is the origin of...?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text} />
        </View>
        <Button
          title="search"
          onPress={this.onButtonPress}></Button>
        <View style={styles.div}>
          <Text style={styles.text}>
            {this.state.answer}
          </Text>
        </View>
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgb(119, 96, 141)',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '900',
    fontSize: 20,
    marginBottom: 24,
  },
  input: {
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 24,
    width: '75%',
    color: 'white'
  },
  div: {
    flex: 0,
    flexDirection: 'column',
    color: 'lavender',
    backgroundColor: 'rgb(119, 96, 141)',
    borderColor: 'rgb(119, 96, 141)',
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 16,
    paddingTop: 36,
    paddingBottom: 36,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%'
  }
});

export default Apology;