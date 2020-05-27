import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate("Profile")}
        ></Button>
        <Text>You are at the homescreen.</Text>
        <Text>LoginState is: </Text>
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
