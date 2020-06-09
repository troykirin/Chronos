import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
// import auth from "@react-native-firebase/auth";

class LoadingScreen extends Component {
  //When Loading Screen Mounts, display an image / animation
  //Check if user is logged in or not
  //If state is logged in, then go to Home Page
  //Else go to LoginPage

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState(true);

    // const user = useState(false);
    const user = false;

    if (user) {
      this.props.navigation.navigate("Home");
    } else {
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Skip Loading Page"
          onPress={() => this.props.navigation.navigate("Login")}
        ></Button>
      </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
