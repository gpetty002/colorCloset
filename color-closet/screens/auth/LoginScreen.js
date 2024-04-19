// LoginScreen.js

import React from "react";
import Colors from "../../assets/colors";
import { Button, View, Text, StyleSheet } from "react-native";
import AnimatedCircles from "../../components/auth/AnimatedCircles";
import InputBox from "../../components/auth/InputBox";

const LoginScreen = ({ navigation }) => {
  const [email] = React.useState("");
  const [password] = React.useState("");
  const handleLogin = (email, password) => {
    // Confirm login with database

    navigation.navigate("Home");
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <AnimatedCircles></AnimatedCircles>
        <Text style={styles.title}>ColorCloset</Text>
        <InputBox
          style={styles.textBox}
          emailChange={email}
          passwordChange={password}
        ></InputBox>
        <Button
          title="New to ColorCloset? Sign up"
          onPress={() => navigation.navigate("Signup")}
          color="black"
        />
        <Button title="Login" color="black" onPress={handleLogin}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    marginTop: 290,
  },
  title: {
    fontSize: 50,
    color: "white",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginScreen;
