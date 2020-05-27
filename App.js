import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

//Screens
import LoadingScreen from "./src/screens/Load";
import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Login";
import ProfileScreen from "./src/screens/Profile";
// import DashboardScreen from "./src/screens/Dashboard";

// firebase
import firebase from "firebase";
firebase.initializeApp(firebaseConfig);
import { firebaseConfig } from "./config";
// create app navigator
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
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
