import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

class Parapsychology extends Component {

  static navigationOptions = {
    title: 'Parapsychology Whiz'
  };
  
  render() {
  
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
       <Text>Parapsychology</Text>
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

export default Parapsychology;