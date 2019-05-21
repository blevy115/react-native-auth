import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA_27iUxsr7Tt-6C5w63gjCIwyJik6CQsw',
      authDomain: 'auth-9ddba.firebaseapp.com',
      databaseURL: 'https://auth-9ddba.firebaseio.com',
      projectId: 'auth-9ddba',
      storageBucket: 'auth-9ddba.appspot.com',
      messagingSenderId: '726466330551',
      appId: '1:726466330551:web:782778807e1fcafa'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
