import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image
} from "react-native";
import {
  Button
} from "react-native-elements";
import CheckAnimation from "../components/CheckAnimation";
import Charts from "../components/Charts";

const sensorDataAPI =
  "https://api.thingspeak.com/channels/615687/feeds.json?results=1";

export default class DeviceScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "IoT Devices"
  };

  state = {
    channel: [],
    feeds: [],
    logs: [],
    devices: "",
    status: false,
    showForm: false,
    checkedActivate: false,
    checkedGeoAlt: false,
    showEnableDeviceButton: true,
    showQrCode: false
  };

  toggleLogVerification = () => {
    fetch(sensorDataAPI)
      .then(response => response.json())
      .then(response =>
        this.setState({
          channel: response.channel,
          feeds: response.feeds
        })
      );
    if (this.state.status == true) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  enableDeviceForm = () => {
    this.setState({ devices: "615687" });
    this.props.navigation.navigate("EnableIoTForm");
  };
  activateDevice() {
    if (this.state.checkedActivate == true) {
      this.setState({ checkedActivate: false });
    } else {
      this.setState({ checkedActivate: true });
    }
  }
  useGeo_Alt() {
    if (this.state.checkedGeoAlt == true) {
      this.setState({ checkedGeoAlt: false });
    } else {
      this.setState({ checkedGeoAlt: true });
    }
  }

  updateDeviceIdTitle(event) {
    this.setState({
      devices: event
    });
  }
  submitForm() {
    this.setState({
      showForm: false,
      showEnableDeviceButton: false
    });
    Alert.alert(
      "Submitted Successfully",
      "Device is now ACTIVATED",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
  blockchainActivation() {
    if (this.state.showQrCode == true) {
      this.setState({ showQrCode: false });
    } else {
      this.setState({ showQrCode: true });
    }

    Alert.alert(
      "Device Assigned To The Blockchain",
      "Device Ready For Transport",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.bodyContainer}>
        <ScrollView>
          <Text style={styles.basicContentStyling}>Current Devices:</Text>
          {this.state.devices ? (
            <Text
              style={styles.smallText}
              emphasis={styles.basicContentStyling}
            >
              Device ID: {this.state.devices}
            </Text>
          ) : (
            <Text style={styles.smallText}>No Devices Enabled</Text>
          )}
          {this.state.showEnableDeviceButton ? (
            <TouchableOpacity style={styles.bottonConfig_tracking}>
              <Button
                icon={{ name: "retweet", type: "font-awesome" }}
                title="Enable Device Tracking"
                onPress={this.enableDeviceForm}
                backgroundColor="#29bbea"
                rounded={true}
              />
            </TouchableOpacity>
          ) : null}
          <View style={styles.mainContainer}>
            <Text style={styles.sensorReadingStyling}>
              Temperature (F){" "}
              {this.state.feeds.map((item, i) => {
                return (
                  <Text
                    style={{
                      fontSize: 50,
                      fontWeight: "bold",
                      textAlign: "auto"
                    }}
                    key={i}
                  >
                    {item.field3}
                  </Text>
                );
              })}
            </Text>
            <Text style={styles.sensorReadingStyling}>
              Humidity (%) 
              {this.state.feeds.map((item, i) => {
                return (
                  <Text
                    style={{
                      fontSize: 50,
                      fontWeight: "bold",
                      textAlign: "auto"
                    }}
                    key={i}
                  >
                    {item.field1}
                  </Text>
                );
              })}
            </Text>
          </View>
          <TouchableOpacity style={styles.bottonConfig}>
            <Button
              icon={{ name: "check", type: "font-awesome" }}
              title="Verify Device"
              onPress={this.toggleLogVerification}
              backgroundColor="#29bbea"
              rounded={true}
            />
          </TouchableOpacity>
          <View style={styles.logVerifyContainer}>
            {this.state.status ? (
              <View>
                <CheckAnimation
                  data={this.state.channel}
                  feedData={this.state.feeds}
                />
                <Charts />
                <TouchableOpacity
                  style={{
                    width: 270,
                    height: 45,
                    margin: 10,
                    marginBottom: 5,
                    alignSelf: "center",
                    paddingBottom: 10
                  }}
                >
                  <Button
                    icon={{ name: "check", type: "font-awesome" }}
                    title="Assign A Blockchain Key"
                    onPress={() => this.blockchainActivation()}
                    backgroundColor="#3014ea"
                    rounded={true}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View>
            {this.state.showQrCode ? (
              <View>
                <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                  Your Product's Public Key for BlockChain Tracking
                </Text>
                <Text style={{ textAlign: "center" }}>
                  Have the transport company scan this QR Code.
                </Text>
                <Image
                  style={{ width: 275, height: 275, alignSelf: "center" }}
                  source={require("../assets/images/QR_cw.com.png")}
                />
              </View>
            ) : null}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 5
  },
  bodyContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flexBasis: 100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#aeaeae",
    margin: 15,
    padding: 2
  },
  basicContentStyling: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  sensorReadingStyling: {
    display: "flex",
    flexDirection: "column",
    flexBasis: 100,
    flex: 2,
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 1,
    margin: 7
  },
  smallText: {
    textAlign: "center",
    fontSize: 10
  },
  logVerifyContainer: {
    justifyContent: "center",
    flex: 1
  },
  bottonConfig: {
    width: 175,
    height: 50,
    marginTop: 10,
    alignSelf: "center"
  },
  bottonConfig_tracking: {
    width: 225,
    height: 50,
    marginTop: 10,
    alignSelf: "center"
  }
});
