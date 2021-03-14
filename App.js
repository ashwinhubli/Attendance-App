import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import AppHeader from './components/AppHeader';
import { Card } from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
import HomeScreen from './screens/Homescreen';
import SummaryScreen from './screens/Summaryscreen';

export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
     <AppHeader/>
     <AppContainer/>
    </View>
    </SafeAreaProvider>
  );
}

const SwitchNavigator = createSwitchNavigator({
  HomeScreen: {screen: HomeScreen},
  SummaryScreen:{screen: SummaryScreen}
})
const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    backgroundColor: 'yellow'

  },
  
});
