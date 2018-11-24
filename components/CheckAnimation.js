import React from 'react';
import { WebView, View, Text, StyleSheet } from 'react-native'
import { MonoText } from './StyledText';

export default class CheckAnimation extends React.Component {
    constructor(props){
        super(props)
    }
    AnimationProps = {
        speed: number = 1,
        loop: boolean = false
    }; 

    render() {
        const data = this.props.data
        return(
            <View>
            <WebView 
                ref={ref => (this.WebView = ref)}
                style={{ width: 230, height: 230, alignSelf: 'center'}} 
                source={{ uri: "https://lottiefiles.com/iframe/3101-first-checked", props: this.AnimationProps.loop }} 
                javaScriptEnabled={true} 
                domStorageEnabled={true}
                >
            </WebView>
            <View >
                <Text style={styles.basicContentStyling}>{data.name} for {data.description}</Text>
                <Text style={styles.basicContentStyling}>Activated on: {data.updated_at}</Text>
                <Text style={styles.basicContentStyling}>Certifications added: Fair Trade, Organic</Text>
                <Text style={styles.basicContentStyling}>Device ID: {data.id}</Text>
                <Text style={styles.basicContentStyling}>Elevation: {data.elevation}</Text>
                <Text style={styles.basicContentStyling}>Location: DENVER, CO, USA</Text>
                <MonoText style={styles.monoscapeStyling}>Latitude: {data.latitude}</MonoText>
                <MonoText style={styles.monoscapeStyling}>Longitude: {data.longitude}</MonoText>
                <Text style={styles.basicContentStyling}>Status: <MonoText>ACTIVATED</MonoText></Text>
            </View>    
            </View>
        )
    }
  }

  const styles = StyleSheet.create({
    container: {
        
    },
    basicContentStyling: {
        textAlign: 'left',
        marginLeft: 20,
        fontSize: 12,
        fontWeight: 'bold'   
    },
    monoscapeStyling: {
        textAlign: 'left',
        marginLeft: 20
    }
  })