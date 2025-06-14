import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesList from '../screens/MoviesList';
import MovieDetail from '../screens/MovieDetail';
import { EWatchStackNames } from '../enums/EWatchStackNames';
import AppHeader from '../components/AppHeader';


const Watch = () => {


  return (

    <>
      <AppHeader headerType='HOME' ></AppHeader>
      <MoviesList></MoviesList>
    </>

  )
}

export default Watch