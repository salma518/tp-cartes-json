// import React from 'react';
// import { View, StatusBar, StyleSheet } from 'react-native';
// import nommé depuis CardList.js
// import { CardList } from './components/CardList';


import React, { useState } from 'react';
import {StyleSheet, View, Button, Text, TextInput } from 'react-native';

export default function App() {
  // const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [nom , setNom] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={Styles.text}>Noms: {list}</Text>
      <TextInput keyboardType="text" placeholder="saisie le nom ...." 
      onChangeText={(e) => setNom(e)}></TextInput>
      <Button title="Ajouter" onPress={() => setList([...list,nom])} />
    </View>
  );
}
 const  Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    color: 'blue',
    padding:20
  }
});



