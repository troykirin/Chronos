import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

//  Screens

import LoadingScreen from "./src/screens/Load";
import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Login";
import ProfileScreen from "./src/screens/Profile";
import SettingsScreen from "./src/screens/Settings";
// import ChatScreen from "./src/screens/Chat";

// firebase
// import firebase from "firebase";
// firebase.initializeApp(firebaseConfig);
// import { firebaseConfig } from "./config";

// Create stack navigator
const Stack = createStackNavigator();

// Create tab navigator
const Tab = createBottomTabNavigator();

// define screen stack
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Chat" component={ChatScreen} /> */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// first function ran as default export in App.js
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      {/* <RootStack /> */}
    </NavigationContainer>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
