import React from 'react';
import { AppRegistry, Text, StyleSheet, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const sensorDataAPI = 'https://api.thingspeak.com/channels/615687/feeds.json?results=1'

export default class DeviceScreen extends React.Component {

  static navigationOptions = {
    title: 'IoT Devices',
  };

  state = {
      channel: [],
      feeds: [],
      status: false,
      logs: []  
  }

  componentDidMount() {
    fetch(sensorDataAPI)
      .then(response => response.json())
      .then(response => this.setState({
          channel: response.channel,
          feeds: response.feeds
      }))
  }

  toggleLogVerification = () => {
    if(this.state.status == true){
        this.setState({ status : false })
    } else {
        this.setState({ status : true })
    }
  }
  
  render() {
    return (
    <View style={styles.bodyContainer}>
            <Text style={styles.basicContentStyling}>{this.state.channel.name}</Text>
            <Text style={styles.smallText}>Device ID: {this.state.channel.id}</Text>
            <Text style={{textAlign: 'center', textDecorationLine: 'underline'}}>Current Sensor Readings:</Text>
        <View style={styles.mainContainer}>
            <Text style={styles.sensorReadingStyling}>{this.state.channel.field3} {this.state.feeds.map((item, i) => {
                return <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'auto'}} key={i}>{item.field3}</Text>
            })}</Text>
            <Text style={styles.sensorReadingStyling}>{this.state.channel.field1} (%) {this.state.feeds.map((item, i) => {
                return <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'auto'}} key={i}>{item.field1}</Text>
            })}</Text>
        </View>
        <Button
            onPress={this.toggleLogVerification}
            icon={
                <Icon
                name='arrow-right'
                size={15}
                color='white'
                />
            }
            iconRight
            title='VERIFY TRANSIT VARIABLES'
        />
        <View style={styles.logVerifyContainer}>
            {
                this.state.status ? <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Product Verified!!</Text> : null
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
        margin: 10
    }

})