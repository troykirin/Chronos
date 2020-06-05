import React, { Component } from "react";
import { View, Text, Button, StyleSheet, useState } from "react-native";

class HomeScreen extends Component {
  // DEV Note: When component instanciated, constructor is ran.
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Function to decrease state of 'count' by 1
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        ></Button>

        <Text>Welcome Home! </Text>

        <Button
          title="Increment"
          onPress={() => this.setState({ count: this.state.count + 1 })}
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
