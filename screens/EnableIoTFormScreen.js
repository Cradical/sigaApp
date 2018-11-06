import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements'

class EnableIoTFormScreen extends React.Component {
  static navigationOptions = {
    title: 'Enable Your IoT Tracking',
  };

  state = {
    channel: [],
    feeds: [],
    logs: [],
    devices: '',
    status: false,
    showForm: false,
    checkedActivate: false,
    checkedGeoAlt: false,
    showEnableDeviceButton: true 
  }

  onPress(){
    console.log('hit')
  }
  
  render() {
    return (
    <View style={styles.bodyContainer}>
      <View style={styles.formContainer}>
        <View style={styles.logVerifyContainer}>
            <FormLabel>Device ID</FormLabel>
            <FormInput onChangeText={(event) => this.updateDeviceId(event)}>#1504A</FormInput>
            <FormValidationMessage>{'This field is require.'}</FormValidationMessage>
            <CheckBox
                title='Activate Device?'
                checked={this.state.checkedActivate}
                onPress={(event) => this.activateDevice(event)}
            />
            <CheckBox
                title='Use Your GeoLocation and Altitude?'
                checked={this.state.checkedGeoAlt}
                onPress={(event) => this.useGeo_Alt(event)}
            />
            <TouchableOpacity style={styles.bottonConfig}>
                <Button
                icon={{name: 'check', type: 'font-awesome'}}
                title='Submit' 
                onPress={() => this.submitForm()}
                backgroundColor='#3014ea'
                rounded={true}
                />
            </TouchableOpacity>
        </View> 
      </View>
    </View>
    );
  }
}
export default EnableIoTFormScreen

const styles = StyleSheet.create({
  formContainer: {
      marginBottom: 5
  },
  bodyContainer: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff'
  },
  mainContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexBasis: 100,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#aeaeae',
      margin: 15,
      padding: 2
  },
  basicContentStyling: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      
  },
  sensorReadingStyling: {
      display: 'flex',
      flexDirection: 'column',
      flexBasis: 100,
      flex: 2,
      textAlign: 'center',
      fontWeight: 'bold',
      borderWidth: 1,
      margin: 7
  },
  smallText: {
      textAlign: 'center',
      fontSize: 10
  },
  logVerifyContainer: {
      justifyContent: 'center',
      flex: 1,
  },
  bottonConfig: {
      width: 175,
      height: 50,
      marginTop: 10,
      alignSelf: 'center'
  },
  bottonConfig_tracking: {
      width: 225,
      height: 50,
      marginTop: 10,
      alignSelf: 'center'
  }

})