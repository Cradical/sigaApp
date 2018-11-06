import React from 'react';
import { Text, View } from 'react-native'
import { AppConsumer } from '../context/app-context'

export default class ProductInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Your Product Information'
    }
    constructor(props){
        super(props)
        this.state = { }
    }

    render(){
        console.log('context: ', this.context)
        return(
            <AppConsumer>
            { (context) => (
                <View>
                   <Text>Product Info Page</Text>
                   <Text>context</Text>
                </View>
            )}
            </AppConsumer>
        )
    }
}