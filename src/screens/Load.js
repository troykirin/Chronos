import React, { Component } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";

export class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Loading Screen </Text>
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
