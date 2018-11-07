import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Picker,
  Alert
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox, Button } from 'react-native-elements'

class EnableIoTFormScreen extends React.Component {
  static navigationOptions = {
    title: 'Enable Your IoT Tracking',
  };

  state = {
    channel: [],
    feeds: [],
    logs: [],
    products: [],
    devices: '',
    status: false,
    showForm: false,
    findNearbyDevice: false,
    checkedActivate: false,
    checkedGeoAlt: false,
    showEnableDeviceButton: true 
  }

  onPress(){
    console.log('hit')
  }

  findNearbyDevice(){
    console.log('Nearby device selected')
    if(this.state.findNearbyDevice == true){
        this.setState({ findNearbyDevice : false })
    } else {
        this.setState({ 
            findNearbyDevice : true,
            devices : '615687'
         })
    } 
  }
  selectProduct() {
    console.log('product selected')
    if(this.state.selectedProduct == true){
        this.setState({ selectedProduct : false })
    } else {
        this.setState({ selectedProduct : true })
    }
  }

  activateDevice() {
    console.log('activate clicked')
    if(this.state.checkedActivate == true){
        this.setState({ checkedActivate : false })
    } else {
        this.setState({ checkedActivate : true })
    }
  }
  useGeo_Alt(){
    console.log('GeoAlt Option clicked')
    if(this.state.checkedGeoAlt == true){
        this.setState({ checkedGeoAlt : false })
        console.log('if')
        console.log(this.state.checkedActivate)
    } else {
        this.setState({ checkedGeoAlt : true })
        console.log('else')
        console.log(this.state.checkedGeoAlt)
    } 
  }

  updateDeviceId(event) {
    console.log('hit')
    console.log(event)
    this.setState({
      devices: event  
    })
  }
  submitForm(){
    console.log(this.state.showForm)
    Alert.alert(
        'Submitted Successfully',
        "Device #" + `${this.state.devices}` + " is now ACTIVATED",
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
      this.props.navigation.navigate('Devices')
  }
  
  render() {
      console.log('propsForm: ', this.props)
    return (
    <View>
    <ScrollView>
    <View style={styles.formContainer}>
        <View style={styles.sectionContainer}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5, marginTop: 10 }}>Device</Text>
            <Text style={{ fontWeight: '300', fontSize: 12, fontFamily: 'serif', marginLeft: 8 }}>Use A Nearby Device?</Text>
            <View style={{ marginLeft: 5 }}>
                <CheckBox
                    title='Yes, use nearby device.'
                    checked={this.state.findNearbyDevice}
                    onPress={(event) => this.findNearbyDevice(event)}
                />
            </View>
                <FormLabel inputStyle={{ fontWeight: 'bold', fontSize: 10 }}>Enter Device ID</FormLabel>
                <FormInput onChangeText={(event) => this.updateDeviceId(event)}>{this.state.findNearbyDevice ? '615687' : '' }</FormInput>
                <FormValidationMessage style={{ fontSize: 10 }}>{'Section Required'}</FormValidationMessage>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 10 }}>Products</Text>
        <Text style={{ fontWeight: '300', fontSize: 12, fontFamily: 'serif', marginLeft: 13 }}>Which product would you like to tag?</Text>
        <Picker
            selectedValue={this.state.products}
            style={{ height: 50, width: 150, marginLeft: 15 }}
            onValueChange={(itemValue, itemIndex) => this.setState({products: itemValue})}>
            <Picker.Item label="Select Item" enabled={false} />
            <Picker.Item label="Coffee" value="Coffee" />
            <Picker.Item label="Talapia" value="Talapia" />
        </Picker>
        <Text style={{ marginLeft: 13, fontFamily: 'serif', marginBottom: 10 }}>Product selected for tagging: <Text style={{ fontWeight: 'bold'}}>{this.state.products}</Text></Text>
        <FormValidationMessage style={{ marginBottom: 5, fontSize: 10 }}>{'Section Required'}</FormValidationMessage>
        <View style={{ borderBottomWidth: 1, borderTopWidth: 1, marginBottom: 5, paddingBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 10 }}>Origin Information</Text>
            <CheckBox
                title='Use Your GeoLocation and Altitude?'
                checked={this.state.checkedGeoAlt}
                onPress={(event) => this.useGeo_Alt(event)}
            />
        <FormValidationMessage style={{ marginBottom: 5}}>{'Section Required'}</FormValidationMessage>
        </View>
        <View style={{ borderBottomWidth: 1, marginBottom: 5, paddingBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 10 }}>Activate Device</Text>
            <CheckBox
                title='Yes, active my device'
                checked={this.state.checkedActivate}
                onPress={(event) => this.activateDevice(event)}
            />
        <FormValidationMessage style={{ marginBottom: 5}}>{'Section Required'}</FormValidationMessage>
        </View>
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
    </ScrollView>
    </View>
    );
  }
}
export default EnableIoTFormScreen

const styles = StyleSheet.create({
  formContainer: {
      marginBottom: 5,
      backgroundColor: '#FFF'
  },
  sectionContainer: {
      margin: 10,
      alignSelf: 'center',
      marginBottom: 3,
      paddingVertical: 5,
      borderBottomWidth: 1
  },
  bodyContainer: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
      paddingVertical: 20,
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
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 25
      
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