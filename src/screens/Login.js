import React, { Component } from "react";
import { View, Text, Button, setState, StyleSheet, Input } from "react-native";

import Loader from "../components/Loader";

//On Login Press, change login state to true

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Logged out.",
      mimin: "",
      login: false,
      loading: false,
      username: "",
      password: "",
    };
  }

  getEmail = () => {};

  getPassword = () => {};

  onButtonPress = (query) => {
    if (this.state.login === false) {
      this.setState({ loading: true });
      this.setState({ text: "Logging in..." });
      this.setState({ login: true });
      console.log("State was false, now changed to true.");

      console.log("Start loading animation.");
      <Loader></Loader>;
    } else {
      console.log("State is true.");
      this.setState({ text: "Error occured. Your already logged in." });
    }
  };

  render() {
    return (
      <View>
        <Loader loading={this.state.loading}></Loader>
        <Text style={styles.header}>Chronos TimeTracker</Text>
        <Text style={styles.loginText}>Email</Text>
        <Text style={styles.loginText}>Password</Text>
        <Button
          title="Login"
          onPress={() => this.onButtonPress("test")}
          containerViewStyle={{ width: "100%", marginBottom: 20 }}
        ></Button>
        <Text style={styles.loginStatus}>{this.state.text}</Text>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    alignSelf: "center",
  },
  loginText: {
    fontSize: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  loginStatus: {
    alignSelf: "center",
  },
});
