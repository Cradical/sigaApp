import React from 'react';
import { AppRegistry, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import CheckAnimation from './CheckAnimation'




const sensorDataAPI = 'https://api.thingspeak.com/channels/615687/feeds.json?results=1'

export default class DeviceScreen extends React.Component {

  static navigationOptions = {
    title: 'IoT Devices',
  };

  state = {
    channel: [],
    feeds: [],
    status: false,
    logs: [],
    devices: ''
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

  enableDevice() {
      console.log('click')
  }
  
  render() {
    return (
    <View style={styles.bodyContainer}>
        <Text style={styles.basicContentStyling}>Current Devices:</Text>
        { this.state.devices ? <Text style={styles.smallText}>Device ID: {this.state.devices}</Text> : <Text style={styles.smallText}>No Devices Enabled</Text> }
        <TouchableOpacity style={styles.bottonConfig_tracking}>
            <Button
              icon={{name: 'retweet', type: 'font-awesome'}}
              title='Enable Device Tracking' 
              onPress={this.enableDevice}
              backgroundColor='#ffa22f'
              rounded={true}
              />
          </TouchableOpacity>

            <Text style={{textAlign: 'center', textDecorationLine: 'underline'}}>Current Sensor Readings:</Text>
        <View style={styles.mainContainer}>
            <Text style={styles.sensorReadingStyling}>{this.state.channel.field3} {this.state.feeds.map((item, i) => {
                return <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'auto'}} key={i}>{item.field3}</Text>
            })}</Text>
            <Text style={styles.sensorReadingStyling}>{this.state.channel.field1} (%) {this.state.feeds.map((item, i) => {
                return <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'auto'}} key={i}>{item.field1}</Text>
            })}</Text>
        </View>
        <TouchableOpacity style={styles.bottonConfig}>
            <Button
              icon={{name: 'check', type: 'font-awesome'}}
              title='Verify Product' 
              onPress={this.toggleLogVerification}
              backgroundColor='#29bbea'
              rounded={true}
              />
          </TouchableOpacity>
        <View style={styles.logVerifyContainer}>
            {
                this.state.status ? 
                <CheckAnimation /> : null
            }
        </View>
    </View>
        )
  }
}

const styles = StyleSheet.create({
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