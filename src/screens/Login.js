import React, { Component } from "react";
import { View, Text, Button, setState, StyleSheet } from "react-native";
import { TouchableHighlightBase } from "react-native";

//On Login Press, change login state to true

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Logged out.", mimin: "", login: false };
  }

  onButtonPress = () => {
    if (this.state.text === "Logged out.") {
      this.setState({ text: "Logged in." });
    } else {
      this.setState({ text: "Logged out." });
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.header}>Welcome to Chronos App!</Text>
        <Text style={styles.loginText}>Email</Text>
        <Text style={styles.loginText}>Password</Text>
        <Button title="Login" onPress={() => this.onButtonPress()}></Button>
        <Text style={styles.loginStatus}>
          You are currently: {this.state.text}
        </Text>
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
