import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ETabNames } from '../enums/ETabName';
import Dashboard from '../screens/Dashboard';
import Watch from '../screens/Watch';
import MediaLibrary from '../screens/MediaLibrary';
import More from '../screens/More';
import AppTabBar from './AppTabBar';
import WatchStack from '../stacks/WatchStack';



const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator 
    
    tabBar={(props)=><AppTabBar {...props} ></AppTabBar>}
    
    initialRouteName={ETabNames.WATCH}
      screenOptions={{
        header: () => <></>
      }}
    >
      <Tab.Screen options={{

      }} name={ETabNames.DASHBOARD} component={Dashboard} ></Tab.Screen>
      <Tab.Screen name={ETabNames.WATCH} component={WatchStack} ></Tab.Screen>
      <Tab.Screen name={ETabNames.MEDIALIBRARY} component={MediaLibrary}></Tab.Screen>
      <Tab.Screen name={ETabNames.MORE} component={More}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default AppTabNavigator