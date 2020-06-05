import React, { Component } from "react";
import { View, Text, Button, StyleSheet, useState } from "react-native";

class HomeScreen extends Component {
  // DEV Note: When component instanciated, constructor is ran.
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // check for username passed
    // this.test_param_pass();

    // ### testing
    // var params = props.navigation.state.params.array;
    //  // get params from previous screen
    //   getParams = ({ route, navigation }) => {
    //     const { username } = route.params;
    //
  }

  // Function to decrease state of 'count' by 1
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
    this.print_count();
  };

  print_count = () => {
    console.log(this.state.count);
    console.log(this.props.test);
  };

  test_param_pass = (route, navigation) => {
    console.log("Testing...");
    // Grab params from navigation
    const { test } = this.props.navigation.navigate.params;
    // const { test } = route.params;};
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        ></Button>

        {/* TESTING AREA */}
        {/* <Text>Welcome Home, {JSON.stringify(username)}</Text> */}
        {/* <Text>Placeholder</Text> */}
        {/* <Text>test: {JSON.stringify(test)}</Text> */}
        <Text>{this.props.route.params.test}</Text>
        {/* END */}

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
