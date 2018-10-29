import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { AppRegistry, Text, StyleSheet } from 'react-native';


export default class DeviceScreen extends React.Component {
  static navigationOptions = {
    title: 'IoT Devices',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <Text>
            Render some info
        </Text>
    );
  }
}
