import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ProductsScreen extends React.Component {
  static navigationOptions = {
    title: 'Products',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.contentContainer}>Information on current product</Text>
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
