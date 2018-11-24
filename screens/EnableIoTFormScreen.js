import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Picker,
  Alert
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox, Button } from 'react-native-elements'
import { MonoText } from '../components/StyledText'

class EnableIoTFormScreen extends React.Component {
  static navigationOptions = {
    title: 'Enable Your IoT Tracking',
  };

  state = {
    logs: [],
    products: [],
    certifications: ['Fair Trade', 'Organic'],
    devices: '',
    status: false,
    findNearbyDevice: false,
    checkedCertificates: false,
    checkedActivate: false,
    checkedGeoAlt: false,
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

  activateCertificates(){
      console.log('Activate Certificates clicked')
      if(this.state.checkedCertificates == true){
          this.setState({ checkedCertificates: false })
      } else { this.setState({ checkedCertificates: true }) }
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
    } else {
        this.setState({ checkedGeoAlt : true })
    } 
  }

  updateDeviceId(event) {
    console.log(event)
    this.setState({
      devices: event  
    })
  }
  submitForm(){
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
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 10, marginTop: 10 }}>Certification Information</Text>
            <Text style={{ fontWeight: '300', fontSize: 12, fontFamily: 'serif', marginLeft: 13  }}>Would you like to attach your certificates to the device?</Text>
            <CheckBox
                title='Yes, use my certificates.'
                checked={this.state.checkedCertificates}
                onPress={(event) => this.activateCertificates(event)}
            />
            <Text style={{ marginLeft: 13, fontFamily: 'serif', marginBottom: 10 }}>Certificates applied: 
                {this.state.checkedCertificates ? 
                <Text>{this.state.certifications.map((cert, i) => {
                    return (
                        <MonoText style={{ fontWeight: 'bold'}} key={i}> 🥕 {cert}</MonoText>
                    )
                })}</Text>
                : ' No certificates applied.'}</Text>
        <FormValidationMessage style={{ marginBottom: 5}}>{'Section Required'}</FormValidationMessage>
        </View>
        <View style={{ borderBottomWidth: 1, marginBottom: 5, paddingBottom: 5 }}>
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
  bottonConfig: {
      width: 175,
      height: 50,
      marginTop: 10,
      alignSelf: 'center'
  }
})