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
  checkIfLoggedIn = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

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
          title="SignInWithGoogle"
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
