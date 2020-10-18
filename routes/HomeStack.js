import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Details from '../screens/Details';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

function HomeStack ({ navigation }){
  return(
    <NavigationContainer>
    <Navigator
      initialRouteName='Home'
      >
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='Details'
        component={Details}
        
      />
    </Navigator>
    </NavigationContainer>
  )
}

export default HomeStack;



