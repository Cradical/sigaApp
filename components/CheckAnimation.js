import React from 'react';
import { WebView, View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { MonoText } from './StyledText';

export default class CheckAnimation extends React.Component {
    constructor(props){
        super(props)
    

AnimationProps = {
    // The source of animation. Can be referenced as a local asset by a string, or remotely
    // with an object with a `uri` property, or it can be an actual JS object of an
    // animation, obtained (for example) with something like
    // `require('../path/to/animation.json')`
    // source: string | AnimationJson | { uri: string },
    
    // A number between 0 and 1, or an `Animated` number between 0 and 1. This number
    // represents the normalized progress of the animation. If you update this prop, the
    // animation will correspondingly update to the frame at that progress value. This
    // prop is not required if you are using the imperative API.
    // progress: number | Animated = 0,
    
    // The speed the animation will progress. This only affects the imperative API. The
    // default value is 1.
    speed: number = 1,
    
    // A boolean flag indicating whether or not the animation should loop.
    loop: boolean = false,
    
    // Style attributes for the view, as expected in a standard `View`:
    // http://facebook.github.io/react-native/releases/0.39/docs/view.html#style
    // CAVEAT: border styling is not supported.
    // style?: ViewStyle,
    
    // [Android] Relative folder inside of assets containing image files to be animated.
    // Make sure that the images that bodymovin export are in that folder with their names unchanged (should be img_#).
    // Refer to https://github.com/airbnb/lottie-android#image-support for more details.
    // imageAssetsFolder: string,
    };
}

    // play the animation all the way through, at the speed specified as a prop.
    // play();
  
  
    // Reset the animation back to `0` progress.
    // reset();

    render() {
        console.log('data: ', this.props.data)
        console.log('feed: ', this.props.feedData)
        const data = this.props.data
        const feedData = this.props.feedData
        // console.log('feedData: ', feedData[0].entry_id)
        return(
            <View>
            <WebView style={{ width: 230, height: 230, alignSelf: 'center'}} source={{ uri: "https://lottiefiles.com/iframe/3101-first-checked" }} javaScriptEnabled={true} domStorageEnabled={true}></WebView>
            <View >
                <Text style={styles.basicContentStyling}>{data.name} for {data.description}</Text>
                <Text style={styles.basicContentStyling}>Activated on: {data.updated_at}</Text>
                {/* <Text style={styles.basicContentStyling}>Humidity: {feedData.field1}</Text> */}
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

// import React from 'react';
// import { Button, StyleSheet, View } from 'react-native';
// import { DangerZone } from 'expo';
// const { Lottie } = DangerZone;

// export default class CheckAnimation extends React.Component {
//   state = {
//     animation: null,
//   };

//   AnimationProps = {
//       loop: boolean = false
//   }

//   componentWillMount() {
//     this._playAnimation();
//   }

//   render() {
//     return (
//       <View style={styles.animationContainer}>
//         {this.state.animation &&
//           <Lottie
//             ref={animation => {
//               this.animation = animation;
//             }}
//             style={{
//               width: 400,
//               height: 400,
//               backgroundColor: '#eee',
//             }}
//             source={this.state.animation}
//           />}
//         <View style={styles.buttonContainer}>
//         </View>
//       </View>
//     );
//   }

//   _playAnimation = () => {
//     if (!this.state.animation) {
//       this._loadAnimationAsync();
//     } else {
//       this.animation.reset();
//       this.animation.play();
//     }
//   };

//   _loadAnimationAsync = async () => {
//     let result = await fetch(
//       'https://cdn.rawgit.com/airbnb/lottie-react-native/635163550b9689529bfffb77e489e4174516f1c0/example/animations/Watermelon.json'
//     )
//       .then(data => {
//         return data.json();
//       })
//       .catch(error => {
//         console.error(error);
//       });
//     this.setState({ animation: result }, this._playAnimation);
//   };
// }

// const styles = StyleSheet.create({
//   animationContainer: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   buttonContainer: {
//     paddingTop: 20,
//   },
// });
