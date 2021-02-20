import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Router from './src/components/router/index'

export default function App() {
  return (
    <NavigationContainer initialRouteName='Home' headerMode='screen'>
    <Router/>
  </NavigationContainer>
  );
}

