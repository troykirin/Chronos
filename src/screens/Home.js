import React, { Component } from "react";
import { View, Text, Button, StyleSheet, useState } from "react-native";

class HomeScreen extends Component {
  // DEV Note: When component instanciated, constructor is ran.
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // check for params passing
    this.test_param_pass();
  }

  // #Dev Tests
  test_param_pass = (route, navigation) => {
    console.log("Testing param passing between screens...");

    // Grab params from navigation
    const { test } = this.props.route.params;

    // return logic
    if (test != undefined) {
      console.log(true);
    } else {
      console.log(false);
    }
  };

  // #Methods

  // Function to decrease state of 'count' by 1
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
    this.print_count();
  };

  // Print current count
  print_count = () => {
    console.log(this.state.count);
    console.log(this.props.test);
  };

  render() {
    // Get Params from previous screen
    const { username } = this.props.route.params;

    return (
      <View style={styles.container}>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        ></Button>

        <Text>Welcome home, {username}</Text>

        <Button
          title="Increment"
          onPress={() => {
            this.setState({ count: this.state.count + 1 });
            this.print_count();
          }}
        ></Button>

        <Button title="Decrease" onPress={() => this.decrement()}></Button>

        <Text>Current Count: {this.state.count}</Text>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
