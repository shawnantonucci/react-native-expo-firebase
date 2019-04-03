import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSwV-fpRnXfgrpzQtBKiaB3JzqDlTY3SI",
  authDomain: "rn-expo-firebase.firebaseapp.com",
  databaseURL: "https://rn-expo-firebase.firebaseio.com",
  projectId: "rn-expo-firebase",
  storageBucket: "rn-expo-firebase.appspot.com"
}

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
