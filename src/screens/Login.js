import React, { Component } from "react";
import { View, Text, Button, setState, StyleSheet, Input } from "react-native";

import Loader from "../components/Loader";
import HomeScreen from "./Home";

//On Login Press, change login state to true

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Logged out.",
      mimin: "",
      login: false,
      loading: false,
      username: "troykirin",
      password: "",
    };
  }

  getEmail = () => {};

  getPassword = () => {};

  onButtonPress = () => {
    if (this.state.login === false) {
      this.setState({ loading: true });
      this.setState({ login: true });
      this.setState({ text: "Logging in..." });
      console.log("State was false, now changed to true.");

      console.log("Start loading animation.");
      <Loader></Loader>;

      console.log("Running settimeout");
      setTimeout(() => {
        this.setState({ loading: false });

        // navigate to HomeScreen and pass data
        this.props.navigation.navigate("Home", {
          test: "unit_test_pass",
          name: "troy",
        });

        console.log("Username incoming: " + this.state.username);
      }, 20);
    } else {
      console.log("State is true.");
      console.log(
        "Logic error occured. Your already logged in. How'd you get here?"
      );
      this.setState({
        text:
          "Logic error occured. Your already logged in. How'd you get here?",
      });
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
          onPress={() => this.onButtonPress()}
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
