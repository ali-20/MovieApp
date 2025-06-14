/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import AppTabNavigator from './src/components/AppTabNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppStack from './src/stacks/AppStack';
import Home from './src/screens/Home';
import globalAppStyles from './src/styles/globalAppStyles';




function App() {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} ></StatusBar>
        <AppStack/>
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
