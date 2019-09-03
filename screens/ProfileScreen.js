import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Button } from 'react-native-elements'
import { MonoText } from '../components/StyledText';



export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  state = {
    profileInfo: {
      Name: 'Conrad Wright',
      Location: 'Durango, CO',
      Farm_size: '12 arcs.',
      Certifications: ['Fair Trade', 'Organic', 'Non-GMO']
    }
  }

  onPressConsole() {
    console.log('click')
  }
  render() {

    const profileInfo = this.state.profileInfo

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
            <Text style={styles.profileContent}>Name: <Text>{profileInfo.Name}</Text></Text>
            <Text style={styles.profileContent}>Location: <MonoText>{profileInfo.Location}</MonoText></Text>
            <Text style={styles.profileContent}>Farm Size: <MonoText>{profileInfo.Farm_size}</MonoText></Text>
            <Text style={styles.profileContent}>Certifications:</Text>
            <View>{profileInfo.Certifications.map((item, i) => {
              return(
                <Text style={{ fontSize: 15, fontWeight: '700', textAlign: 'left', marginLeft: 105 }} key={i}> 🥕 {item} </Text>
              )
            })}</View>
          </View>
          <TouchableOpacity style={styles.bottonConfig}>
            <Button
              icon={{name: 'user', type: 'font-awesome'}}
              title='Edit Profile' 
              onPress={this.onPressConsole}
              backgroundColor='#29bbea'
              rounded={true}
              />
          </TouchableOpacity>
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
    margin: 15,
    marginBottom: 10
},
  profileImage: {
    display: 'flex',
    flex: 1,
    width: 150,
    height: 130,
    resizeMode: 'contain',
    marginTop: 3,
    alignSelf: 'center',
},
  profileContent: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 100,
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5
},
  bottonConfig: {
    width: 175,
    height: 50,
    marginTop: 20,
    alignSelf: 'center'
  }
});