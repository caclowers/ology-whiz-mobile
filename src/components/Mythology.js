import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

class Mythology extends Component {

  static navigationOptions = {
    title: 'Mythology Whiz'
  };
  
  render() {
  
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
       <Text>Mythology</Text>
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

export default Mythology;