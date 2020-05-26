import React, { Component } from "react";
import { View, Text, Button } from "react-native";

function LoginScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Home")}
      ></Button>
      <Text style={{ alignSelf: "center" }}>Welcome to Chronos App!</Text>
    </View>
  );
}

export default LoginScreen;
