import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/screens/Home";
import { StyleSheet, Text, View } from "react-native";

//For later use, other two screens in AppNavigator
import AddItem from "./src/screens/AddItem";
import List from "./src/screens/List";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
