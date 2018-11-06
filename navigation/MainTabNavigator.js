import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { StackNavigator, SwitchNavigator } from 'react-navigation'; // 1.3.0


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DeviceScreen from '../screens/DeviceScreen'
import EnableIoTFormScreen from '../screens/EnableIoTFormScreen';
import ProductInfoScreen from '../screens/ProductInfoScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home{focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};


const DeviceStack = createStackNavigator({
  Devices: DeviceScreen,
  EnableIoTForm: EnableIoTFormScreen
})

DeviceStack.navigationOptions = {
  tabBarLabel: 'Devices',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-radio${focused ? '' : '-outline'}` : 'md-wifi'}
      />
  ),
}
  
const ProductsStack = createStackNavigator({
  Products: ProductsScreen,
  ProductInfo: ProductInfoScreen
});

ProductsStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-nutrition{focused ? '' : '-outline'}` : 'md-nutrition'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile : ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProductsStack,
  DeviceStack,
  ProfileStack,
});
