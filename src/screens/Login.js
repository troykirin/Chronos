import React, { Component } from "react";
import { View, Text, Button, setState, StyleSheet } from "react-native";

import Loader from "../components/Loader";
import TextInput from "../components/TextInput";

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
      email: "",
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
          username: this.state.username,
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
      <View style={page.container}>
        <Loader loading={this.state.loading}></Loader>
        <Text style={page.header}>Chronos TimeTracker</Text>

        <TextInput
          style={input.standard}
          inText={"Please enter your email here."}
        />
        <TextInput
          style={input.standard}
          inText={"Please enter your password here."}
        />

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

const page = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  header: {
    fontSize: 30,
    alignSelf: "center",
  },
});

const input = StyleSheet.create({
  standard: {
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
  },
});

const styles = StyleSheet.create({
  loginText: {
    fontSize: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  loginStatus: {
    alignSelf: "center",
  },
  loginBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
  },
});
