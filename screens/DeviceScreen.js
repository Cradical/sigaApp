import React from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';


export default class DeviceScreen extends React.Component {
  static navigationOptions = {
    title: 'IoT Devices',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View style={styles.container}>
            <Text style={styles.contentContainer}>
                IoT Device Name:
            </Text>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff'
    },
    contentContainer: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
})