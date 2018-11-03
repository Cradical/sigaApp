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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    products: ['Coffee', 'Talapia'],
    iot_devices: '#1560A',
    userProfile: {
      first_name: 'Conrad'
    },
    status: 'Active'
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <Image
              source={
                __DEV__
                  ? require('../assets/images/atomix_user31.png')
                  : require('../assets/images/atomix_user31.png')
              }
              style={styles.welcomeImage}
            />
            <View style={styles.contentContainer}>
              <Text style={styles.greeting}>Hi, {this.state.userProfile.first_name}!</Text>
              <Text style={styles.greetingSubtitle}>Welcome to Siga</Text>
            </View>
            <Text style={styles.titleDisplay}>Your Products:</Text>
              <View>{this.state.products.map((product, i) => {
                return (
                  <MonoText style={styles.infoDisplay} key={i}> 🥕 {product}</MonoText>
                )
              })}</View>
            <Text style={styles.titleDisplay}>Your IoT Device:</Text> 
              <MonoText style={styles.infoDisplay}>Device_ID: {this.state.iot_devices}</MonoText>
              <MonoText style={styles.infoDisplay}>Status: {this.state.status}</MonoText>
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
    paddingTop: 40,
    resizeMode: 'contain',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  userInfo: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  titleDisplay: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 5
  },
  infoDisplay: {
    fontSize: 17,
    fontWeight: '400'
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
    marginBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'grey'
  }
});
