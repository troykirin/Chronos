import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  setState,
  StyleSheet,
  TextInput,
} from "react-native";

import Loader from "../components/Loader";
import ShowModal from "../components/showModal";
// import TextInput from "../components/TextInput";

//On Login Press, change login state to true

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadAnimationText: "Logged out.",
      mimin: "",
      login: false,
      loading: false,
      username: "troykirin",
      password: "",
      email: "",
    };
  }

  // CURRENT
  // trying to create a reference to change parent state from child components
  // this.changeChild = React.createRef();

  emailHandler = (text) => {
    this.setState({ email: text });
    //validate
    console.log("EmailHandler: " + this.state.email);
  };

  passwordHandler = (text) => {
    this.setState({ password: text });

    console.log("PasswordHandler: " + this.state.password);
  };

  validateLogin = () => {
    // user is not logged in
    if (this.state.login === false) {
      //give loading screen
      this.setState({ loading: true });
      //verify credentials...not implemented
      //

      //if verfiy returns true, set state to login
      this.setState({ login: true });
      this.setState({ loadAnimationText: "Logging in..." });
      console.log("validateLogin() State was false, now changed to true.");
    } else {
      console.log("User already logged in.");

      this.setState({
        loadAnimationText: "Your already logged in, let's bring you home.",
      });
    }

    console.log("Validation complete.");
  };

  runLoadAnimation = () => {
    console.log("Start loading animation.");
    <Loader></Loader>;

    console.log("Running settimeout");
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);

    console.log("End of load animation.");
  };

  login = (email, password, modalState) => {
    this.emailHandler(email);
    this.passwordHandler(password);
    this.validateLogin();
    this.runLoadAnimation();

    // navigate to Profile, pass props through route navigation
    this.props.navigation.navigate("Profile", {
      username: this.state.username,
      email: this.state.email,
    });
    console.log(
      "Username from LoginScreen is: " +
        this.state.username +
        " should match as expected output."
    );

    // NOT WORKING
    // this.setModalVisible(true);
    // <ShowModal />;
  };

  render() {
    return (
      <View style={page.container}>
        <Loader loading={this.state.loading}></Loader>
        <Text style={page.header}>Chronos TimeTracker Chatbot</Text>
        <TextInput
          style={input.standard}
          placeholder={"Email"}
          textAlign={"center"}
          onChangeText={this.emailHandler}
        />
        <TextInput
          style={input.standard}
          placeholder={"Password"}
          textAlign={"center"}
          onChangeText={this.passwordHandler}
        />
        <Button
          title="Login"
          onPress={() => this.login(this.state.email, this.state.password)}
          containerViewStyle={{ width: "100%", marginBottom: 20 }}
        ></Button>
        <Text style={styles.loginStatus}>{this.state.text}</Text>
      </View>
    );
  }
}

export default LoginScreen;

const page = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  header: {
    fontSize: 30,
    alignSelf: "center",
  },
});

const input = StyleSheet.create({
  standard: {
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
  },
});

const styles = StyleSheet.create({
  loginText: {
    fontSize: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  loginStatus: {
    alignSelf: "center",
  },
  loginBox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    alignItems: "center",
  },
});
