import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Watch from '../screens/Watch';
import { EWatchStackNames } from '../enums/EWatchStackNames';
import MovieSearch from '../screens/MovieSearch';


const WStack = createNativeStackNavigator();

const WatchStack = () => {
    return (
        <WStack.Navigator
        screenOptions={{
            header:()=><></>
        }}
        initialRouteName={EWatchStackNames.MOVIESLIST}>
            <WStack.Screen name={EWatchStackNames.MOVIESLIST} component={Watch}></WStack.Screen>
            <WStack.Screen name={EWatchStackNames.MOVIESEARCH} component={MovieSearch}></WStack.Screen>
        </WStack.Navigator>
    )
}

export default WatchStack