import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      ></Button>
    </View>
  );
}

export default HomeScreen;
