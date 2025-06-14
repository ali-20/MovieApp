import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from '../screens/MoviesList';
import MovieDetail from '../screens/MovieDetail';
import { EScreens, EWatchStackNames } from '../enums/EWatchStackNames';
import AppHeader from '../components/AppHeader';
import Home from '../screens/Home';
import MovieTrailer from '../screens/MovieTrailer';

const Stack = createNativeStackNavigator();
const AppStack =
 () => {


  return (
    <Stack.Navigator 
    initialRouteName={EScreens.HOME}
      screenOptions={{
        header: ({ options, route, back }) => <></>
      }}
    >

      <Stack.Screen name={EScreens.HOME} component={Home}></Stack.Screen>
      <Stack.Screen name={EScreens.MOVIEDETAIL} component={MovieDetail}></Stack.Screen>
      <Stack.Screen name={EScreens.MOVIETRAILER} component={MovieTrailer}></Stack.Screen>

    </Stack.Navigator>

  )
}

export default AppStack