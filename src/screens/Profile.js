import React, { Component } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { Header, Card } from "native-base";

function ProfileScreen({ navigation, route }) {
  const { username, email } = route.params;
  return (
    <View>
      <Header>
        <Text style={{ fontSize: 20 }}>Hi, {username}</Text>
      </Header>
      <Card>
        <Text>Your email is: {email}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/profile_pic.jpg")}
        />
      </Card>

      <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
      <Button
        title="Go Settings"
        onPress={() => navigation.navigate("Settings")}
      ></Button>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565",
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center",
  },
  flowRight: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center",
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#48BBEC",
    borderRadius: 8,
    color: "#48BBEC",
  },
  image: {
    width: 200,
    height: 220,
    alignSelf: "center",
  },
});
