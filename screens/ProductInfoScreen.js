import React from 'react';
import { Text, View } from 'react-native'

export default class ProductInfoScreen extends React.Component {
    static navigationOptions = {
        title: 'Your Product Information'
    }
    constructor(props){
        super(props)
        this.state = { }
    }

    render(){
        return(
                <View>
                   <Text>Product Info Page</Text>
                   <Text>context</Text>
                </View>
        )
    }
}