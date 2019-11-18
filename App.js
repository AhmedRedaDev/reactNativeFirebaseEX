/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'react-native-firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

 
export default class App extends Component {
  componentDidMount(){
    this.getToken()
 }
  getToken= async()=>{
    // const fcmToken = await firebase.messaging().getToken();
    // console.log('TCL: fcmToken=> ', fcmToken);// enXITp17QjY:APA91bGz49EH17RHqv29jCZQ2KAEeJi6jl4gUhrQkMk_QKj1XvafCzTa5A_-fuX_bKVz8oagHpu0e46siGQIhdjp3iU44tMXLpTmYScrLwzNfD5DbVxmUWZFlY701xP-rcFdeWg2B21X
 
  }
  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
