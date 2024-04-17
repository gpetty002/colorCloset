import React from "react";
import { View, Text } from "react-native";
import BottomNav from "../../components/BottomNav";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <BottomNav></BottomNav>
    </View>
  );
};

export default HomeScreen;
