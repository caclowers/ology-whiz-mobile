import React from 'react';
import { StatusBar, StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Button from './src/components/Button.js';

class App extends React.Component {

  static navigationOptions = {
    title: '[-olo(gy] whiz)',
    headerStyle: { backgroundColor: 'lavender' },
    headerTitleStyle: { color: 'rgb(119, 96, 141)', fontSize: 38 },

  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      {/* <View>
          <StatusBar barStyle="light-content"/>
        </View> */}
        <Text style={styles.title}>olo(gy) whiz</Text>
        <Button title="Etymology Whiz"></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'lavender',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'rgb(119, 96, 141)',
    
  }
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  // specials: Specials,
  // pizza: Pizza,
  // traditional: Traditional,
  // gourmet: Gourmet,
  // createYourOwn: CreateYourOwn,
  // sandwiches: Sandwiches,
  // reviews: Reviews,
  // about: About,
})



export default createAppContainer(Navigation);
