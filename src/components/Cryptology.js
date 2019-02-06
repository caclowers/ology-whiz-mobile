import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

class Cryptology extends Component {

  static navigationOptions = {
    title: 'Cryptology Whiz'
  };
  
  render() {
  
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
       <Text>Cryptology</Text>
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

export default Cryptology;