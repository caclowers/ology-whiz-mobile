import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

class Technology extends Component {

  static navigationOptions = {
    title: 'Technology Whiz'
  };
  
  render() {
  
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
       <Text>Technology</Text>
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

export default Technology;