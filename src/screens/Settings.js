import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome to the Settings Page</Text>
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.navigate("Home")}
        ></Button>
      </View>
    );
  }
}

export default SettingsScreen;

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
