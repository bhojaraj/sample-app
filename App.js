import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  // const [ text, setText ] = useState('Open up App.js to start working on your app');
  return (
    <View style={styles.screen}>
    {/* <View style={styles.container}>
          <StatusBar style="inverted" />
          <Text> { text } </Text>
          <Button title="Change Text" onPress={() => setText('The text is changed')} />
        </View> */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Goal" style={styles.input}/>
          <Button title="ADD" />
        </View>
        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderColor:'#000', 
    borderWidth: 1, 
    padding: 10
  }

});
