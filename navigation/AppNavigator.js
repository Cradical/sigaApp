import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { StackNavigator, SwitchNavigator } from 'react-navigation';


import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
// import ProfileScreen from '../screens/ProfileScreen';
import DeviceScreen from '../screens/DeviceScreen'
import EnableIoTFormScreen from '../screens/EnableIoTFormScreen'

// const AppStack = createStackNavigator({ 
//   Home: {
//     screen: HomeScreen
//   },
//   Devices: {
//     screen: DeviceScreen
//   },
//   EnableIoTForm: {
//     screen: EnableIoTFormScreen
//   }, 
//   Products: {
//     screen: ProductsScreen
//   }
//  });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  // AuthLoading: AuthLoadingScreen,
  // App: AppStack,
  // Auth: AuthStack,
});



