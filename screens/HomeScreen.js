import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    products: ['Coffee', 'Talapia'],
    userProfile: {
      first_name: 'Conrad'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <Image
              source={ require('../assets/images/atomix_user31.png') }
              style={styles.welcomeImage}
            />
            <View style={styles.contentContainer}>
              <Text style={styles.greeting}>Hi, {this.state.userProfile.first_name}!</Text>
              <Text style={styles.greetingSubtitle}>Welcome to <Text style={styles.sigaLogo}>Siga</Text></Text>
            </View>
            <Text style={styles.titleDisplay}>Your Products:</Text>
              <View>{this.state.products.map((product, i) => {
                return (
                  <MonoText style={styles.productDisplay} key={i}> 🥕 {product}</MonoText>
                )
              })}</View>
            <Text style={styles.titleDisplay}>Your IoT Device:</Text> 
              <MonoText style={styles.infoDisplay}>Please Add A Device</MonoText>
              <MonoText style={styles.infoDisplay}>In The Devices Tab</MonoText>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 130,
    marginTop: 25,
    paddingTop: 40,
    resizeMode: 'contain',
    shadowRadius: 15,
    shadowOpacity: 13,
    shadowColor: 'rgba(96,100,109, 0.8)',
    shadowOffset: {width: 12, height: 12} 
  },
  titleDisplay: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 5
  },
  productDisplay: {
    fontSize: 17,
    fontWeight: '400',
  },
  infoDisplay: {
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'italic'
  },
  greeting: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center'

  },
  greetingSubtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 5
  },
  sigaLogo: {
    color: '#009fff',
    textShadowColor:  '#29bbea',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic'
  }
});
