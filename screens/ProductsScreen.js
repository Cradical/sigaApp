import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

export default class ProductsScreen extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: 'Products',
  };

  state = {
    productList: [{
      title: 'Coffee',
      icon: 'av-timer'
    }, {
      title: 'Talapia',
      icon: 'flight-takeoff'
    }]
  }

  showProductPage = () => {
    this.props.navigation.navigate('ProductInfo')
  }

render() {
  console.log(this.props)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.contentContainer}>Manage Your Products Here</Text>
      </View>
      <View>
        <List>
          {
            this.state.productList.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                leftIcon={{name: item.icon}}
                onPress={this.showProductPage}
              />
            ))
          }
      </List>
      </View>
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
}
});
