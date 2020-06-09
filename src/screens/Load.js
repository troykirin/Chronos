import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";
import { useState, useEffect } from "react";

class LoadingScreen extends Component {
  // When Loading Screen Mounts, display an image / animation
  // Check if user is logged in or not
  // If state is logged in, then go to Home Page
  // Else go to LoginPage

  constructor(props) {
    super(props);
    this.state = {
      user_login: false,
    };
  }

  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    // if there exists a user logged in before, go to home page
    if (this.state.user_login === true) {
      this.props.navigation.navigate("Home");
    }
    // no user exists, set initializing to true and run login / registration
    if (this.state.user_login === false) {
      this.props.navigation.navigate("Login");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Start App"
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
