import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation'; // 1.3.0


    class EnableIoTFormScreen extends React.Component {
        static navigationOptions = {
          title: 'Lots of features here',
        };

        onPress(){
          console.log('hit')
        }
      
        render() {
          return (
            <View >
              <Button title="I'm done, sign me out" onPress={this.onPress} />
              <StatusBar barStyle="default" />
            </View>
          );
        }
    }
export default EnableIoTFormScreen