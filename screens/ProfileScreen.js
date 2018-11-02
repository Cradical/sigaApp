import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { List, ListItem } from 'react-native-elements'  
import { WebBrowser } from 'expo';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  state = {
    certifications: ['Fair Trade', 'Organic', 'Non-GMO']
  }

  onPressConsole() {
    console.log('click')
  }
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container}>
        <View style={styles.container}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/atomix_user31.png')
                  : require('../assets/images/atomix_user31.png')
              }
              style={styles.profileImage}
            />
          <View style={styles.profileContainer}>
            <Text style={styles.profileContent}>Name: Bill Harrison</Text>
            <Text style={styles.profileContent}>Location: Durango, CO</Text>
            <Text style={styles.profileContent}>Farm Size: 12 arcs.</Text>
            <Text style={styles.profileContent}>Certifications:</Text>
          </View>
            <List>
              {
                this.state.certifications.map((item, i) => {
                  return (
                    <ListItem
                      key={i}
                      title={item}
                      subtitle="By USDA"
                      onPress={this.onPressConsole}
                      />
                  )
                })
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
},
  profileContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    flexBasis: 100,
    margin: 15
},
  profileImage: {
    display: 'flex',
    flex: 1,
    width: 150,
    height: 130,
    resizeMode: 'contain',
    marginTop: 3,
    marginRight: 10,
    alignSelf: 'center',
},
  profileContent: {
    display: 'flex',
    // flex: 1,
    flexDirection: 'column',
    flexBasis: 100,
    flexWrap: 'wrap',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold', 
    margin: 7
},
});