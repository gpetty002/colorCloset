// SignupScreen.js

import React from "react";
import { TextInput } from "react-native-paper";
import { Button, View, Text } from "react-native";
import { Button as PaperButton } from "react-native-paper";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View>
      <Text>Welcome to Signup Screen</Text>
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
      <PaperButton onPress={() => navigation.navigate("Home")}>
        Signup
      </PaperButton>
    </View>
  );
};

export default SignupScreen;
