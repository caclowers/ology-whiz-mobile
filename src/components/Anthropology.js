import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

class Anthropology extends Component {

  static navigationOptions = {
    title: 'Anthropology Whiz'
  };
  
  render() {
  
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
       <Text>Anthropology</Text>
     </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Anthropology;