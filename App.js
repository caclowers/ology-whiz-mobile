import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, StatusBar, ScrollView, Image, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Button from './src/components/Button.js';

//import array
import Whizzes from './src/components/Whizzes.js';

//import views
import Anthropology from './src/components/Anthropology.js';
import Apology from './src/components/Apology.js';
import Archaeology from './src/components/Archaeology.js';
import Astrology from './src/components/Astrology.js';
import Biology from './src/components/Biology.js';
import Cryptology from './src/components/Cryptology.js';
import Egyptology from './src/components/Egyptology.js';
import Parapsychology from './src/components/Parapsychology.js';
import Etymology from './src/components/Etymology.js';
import Mythology from './src/components/Mythology.js';
import Technology from './src/components/Technology.js';

const whizzes = Whizzes;


class App extends React.Component {

  static navigationOptions = {
    title: '[-olo(gy] whiz)',
    headerStyle: { backgroundColor: 'lavender' },
    headerTitleStyle: { color: 'rgb(119, 96, 141)', fontSize: 36 },
  }

  onButtonPress = (whiz) => {
    this.props.navigation.navigate('');
  }

  render() {

    let whizArray = whizzes.map((whiz, index) => {

      if (Platform.OS === 'ios') {

        return (
          <TouchableOpacity
            key={index}
            style={styles.div}
            onPress={this.onButtonPress}
            activeOpacity={0.75}
          >
            <Image
              alt={whiz.name}
              source={whiz.image}
              style={styles.image}
            />
            <Text style={styles.text}>{whiz.name}</Text>
          </TouchableOpacity>
        )
      }
      return (
        <TouchableNativeFeedback
          key={index}
          
          onPress={this.onButtonPress}
        >
          <View
          style={styles.div}
          >
            <Image
              alt={whiz.name}
              source={whiz.image}
              style={styles.image}
            />
            <Text style={styles.text}>{whiz.name}</Text>
          </View>

        </TouchableNativeFeedback>
      )
    });

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {whizArray}
        <View style={{ height: 64 }}></View>
      </ScrollView>
    );
  };
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
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
    fontSize: 16
  },
  image: {
    height: 84,
    width: '40%',
    marginRight: 20,
    borderRadius: 8,
    overflow: 'hidden'
  },
  div: {
    flex: 0,
    flexDirection: 'row',
    color: 'lavender',
    backgroundColor: 'rgb(119, 96, 141)',
    borderColor: 'rgb(119, 96, 141)',
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%'
  }
});

//navigation stuff
const Navigation = createStackNavigator({
  home: App,
  anthropology: Anthropology,
  apology: Apology,
  archaeology: Archaeology,
  astrology: Astrology,
  biology: Biology,
  cryptology: Cryptology,
  egyptology: Egyptology,
  etymology: Etymology,
  mythology: Mythology,
  parapsychology: Parapsychology,
  technology: Technology
})

export default createAppContainer(Navigation);
