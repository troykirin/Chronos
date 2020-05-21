import React, { Component } from "react";
import { View, Text, Button } from "react-native";

function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Profile Screen!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
    </View>
  );
}

export default ProfileScreen;
