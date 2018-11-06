import React from 'react';
import { WebView, View, Text, StyleSheet } from 'react-native'

export default class Charts extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                {/* Humidity */}
                <WebView style={{ width: 325, height: 180, alignSelf: 'center', marginRight: 25 }} source={{ uri: "https://thingspeak.com/channels/615687/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=spline"}} javaScriptEnabled={true} domStorageEnabled={true}></WebView>
                {/* Temp (F) */}
                <WebView style={{ width: 325, height: 180, alignSelf: 'center', marginRight: 25 }} source={{ uri: "https://thingspeak.com/channels/615687/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temp%28F%29&type=spline"}} javaScriptEnabled={true} domStorageEnabled={true}></WebView>
                {/* location */}
                <WebView style={{ width: 325, height: 180, alignSelf: 'center', marginRight: 25, marginLeft: 25 }} source={{ uri: "https://thingspeak.com/channels/615687/maps/channel_show"}} javaScriptEnabled={true} domStorageEnabled={true}></WebView>
            </View>
        )
    }
}



