import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  StyleSheet, View ,ScrollView} from 'react-native';
import Home from './screens/Home';

import HomeStack from './routes/HomeStack';

export default function App() {


  return (
    <View style={styles.container}>
      
     <HomeStack/>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  header: {
    padding: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  boldText: {
    fontWeight:'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
    fontWeight:'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer:{
margin:20
  },
  button:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  thumbnail: {
    height: 190,
    width: 120,
    margin: 5,
    
},
bookList:{
  flexDirection: 'row',
}


});
