import React from 'react';
import { AppRegistry, Text, StyleSheet, View, Button } from 'react-native';

const sensorDataAPI = 'https://api.thingspeak.com/channels/615687/feeds.json?results=1'

export default class DeviceScreen extends React.Component {
  static navigationOptions = {
    title: 'IoT Devices',
  };

  state = {
      channel: [],
      feeds: [],
      test: 'test'
  }

  componentDidMount() {
    fetch(sensorDataAPI)
      .then(response => response.json())
      .then(response => this.setState({
          channel: response.channel,
          feeds: response.feeds
      }))
  }
  
  render() {
    console.log('feeds: ', this.state.feeds)
    return (
        <View style={styles.container}>
            <Text style={styles.contentContainer}>{this.state.channel.name}</Text>
            <Text style={styles.smallText}>Device ID: {this.state.channel.id}</Text>
            <Text>{this.state.channel.field3} {this.state.feeds.map(item => {
                return <Text key={item.entry_id}>{item.field3}</Text>
            })}</Text>
                {/* this code below will need to be refractored to account for unique keys */}
            <Text>{this.state.channel.field1} {this.state.feeds.map(item => {
                return <Text key={item.created_at}>{item.field1}</Text>
            })}</Text>
        </View>
        )
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
    },
    smallText: {
        textAlign: 'center',
        fontSize: 10
    }

})