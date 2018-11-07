import React from 'react';
import { AppRegistry, Text, StyleSheet, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox, Button, Icon } from 'react-native-elements'
import CheckAnimation from '../components/CheckAnimation'
import Charts from '../components/Charts'


const sensorDataAPI = 'https://api.thingspeak.com/channels/615687/feeds.json?results=1'

export default class DeviceScreen extends React.Component {
    constructor(props){
        super(props)
    }

  static navigationOptions = {
    title: 'IoT Devices',
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

  componentDidMount() {
    
  }

  toggleLogVerification = () => {
    fetch(sensorDataAPI)
      .then(response => response.json())
      .then(response => this.setState({
          channel: response.channel,
          feeds: response.feeds
      }))
    if(this.state.status == true){
        this.setState({ status : false })
    } else {
        this.setState({ status : true })
    }
  }

  enableDeviceForm = () => {
    console.log('click')
    //   console.log(props.navigation.actions)
    this.setState({ devices: '615687'})
    this.props.navigation.navigate('EnableIoTForm')
    // if(this.state.showForm == true){
    //     this.setState({ showForm : false })
    // } else {
    //     this.setState({ showForm : true })
    // }
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

  updateDeviceIdTitle(event) {
    console.log('update hit')
    console.log(event)
    this.setState({
      devices: event  
    })
  }
  submitForm(){
    console.log(this.state.showForm)
    this.setState({
        showForm: false,
        showEnableDeviceButton: false
    })
    Alert.alert(
        'Submitted Successfully',
        'Device is now ACTIVATED',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
  }
  blockchainActivation(){
    Alert.alert(
        'Device Assigned to Blockchain',
        "Device Ready For Transport",
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
}
  
  render() {
    console.log(this.state.channel)
    return (
    <View style={styles.bodyContainer}>
        <ScrollView>
        <Text style={styles.basicContentStyling}>Current Devices:</Text>
        { this.state.devices ? <Text style={styles.smallText} emphasis={styles.basicContentStyling}>Device ID: {this.state.devices}</Text> : <Text style={styles.smallText}>No Devices Enabled</Text> }
        { this.state.showEnableDeviceButton ? 
        <TouchableOpacity style={styles.bottonConfig_tracking}>
            <Button
              icon={{name: 'retweet', type: 'font-awesome'}}
              title='Enable Device Tracking' 
              onPress={this.enableDeviceForm}
              backgroundColor='#29bbea'
              rounded={true}
              />
        </TouchableOpacity> : null }
        <View style={styles.formContainer}>
            <ScrollView style={styles.bodyContainer}>
            {/* {
                this.state.showForm ? 
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
                    <TouchableOpacity style={styles.bottonConfig_tracking}>
                        <Button
                        icon={{name: 'check', type: 'font-awesome'}}
                        title='Submit' 
                        onPress={() => this.submitForm()}
                        backgroundColor='#3014ea'
                        rounded={true}
                        />
                    </TouchableOpacity>
                </View> : null
            } */}
            </ScrollView>
        </View>
            {/* <Text style={{textAlign: 'center', textDecorationLine: 'underline'}}>Current Sensor Readings:</Text> */}
        <View style={styles.mainContainer}>
            <Text style={styles.sensorReadingStyling}>Temperature (F) {this.state.feeds.map((item, i) => {
                return <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'auto'}} key={i}>{item.field3}</Text>
            })}</Text>
            <Text style={styles.sensorReadingStyling}>Humidity (%) {this.state.feeds.map((item, i) => {
                return <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'auto'}} key={i}>{item.field1}</Text>
            })}</Text>
        </View>
        <TouchableOpacity style={styles.bottonConfig}>
            <Button
              icon={{name: 'check', type: 'font-awesome'}}
              title='Verify Device' 
              onPress={this.toggleLogVerification}
              backgroundColor='#29bbea'
              rounded={true}
              />
          </TouchableOpacity>
        <View style={styles.logVerifyContainer}>
            {
                this.state.status ? 
                <View>
                    <CheckAnimation data={this.state.channel} feedData={this.state.feeds}/>
                    <Charts />
                        <TouchableOpacity style={{ width: 270, height: 45, margin: 10, marginBottom: 5, alignSelf: 'center', paddingBottom: 10 }}>
                        <Button
                        icon={{name: 'check', type: 'font-awesome'}}
                        title='Attach Blockchain Signature' 
                        onPress={() => this.blockchainActivation()}
                        backgroundColor='#3014ea'
                        rounded={true}
                        />
                </TouchableOpacity>
                </View> : null
            }
        </View>
        </ScrollView>
    </View>
        )
  }
}

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