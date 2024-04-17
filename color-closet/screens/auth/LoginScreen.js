// LoginScreen.js

import React from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Button as PaperButton } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View>
      <Text>Welcome to Login Screen</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      ></TextInput>
      <TextInput
        label="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
      ></TextInput>
      <Button
        title="New to ColorCloset? Sign up"
        onPress={() => navigation.navigate("Signup")}
      />
      <PaperButton onPress={() => navigation.navigate("Home")}>
        Login
      </PaperButton>
    </View>
  );
};

export default LoginScreen;
