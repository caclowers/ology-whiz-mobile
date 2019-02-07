import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, ImageBackground } from 'react-native';
import Button from './Button.js';

class Etymology extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'enter text here' };

    function onButtonPress() {
      try {
        let response = fetch('https://od-api.oxforddictionaries.com/api/v1/entries/en/{searchword}/etymologies;examples', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            app_id: '35ed8202',
            app_key: '7fd753df9e0a5289784626d93c66314d'
          }
        });
        console.log('BODY', response);
        return response;
      } catch (error) {
        console.error(error);
      };
    } //end of function onButtonPress
  }; //end of constructor
  //end of Class

  static navigationOptions = {
    title: 'Etymology Whiz',
    headerStyle: { backgroundColor: 'lavender' },
    headerTitleStyle: { color: 'rgb(119, 96, 141)', fontSize: 24 },
  };

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
    fontSize: 16,
    marginBottom: 24,
  },
  input: {
    borderColor: 'white',
    borderWidth: 2,
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

export default Etymology;