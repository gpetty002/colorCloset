// BottomNav.js

import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FeaturedScreen from "../screens/featured/FeaturedScreen";
import CameraScreen from "../screens/camera/CameraScreen";
import ClosetScreen from "../screens/closet/ClosetScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FeaturedStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Featured" component={FeaturedScreen} />
  </Stack.Navigator>
);

const CameraStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Camera" component={CameraScreen} />
  </Stack.Navigator>
);

const ClosetStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Closet" component={ClosetScreen} />
  </Stack.Navigator>
);

const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarPosition: "bottom" }}>
      <Tab.Screen
        name="Featured"
        component={FeaturedScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="star" color="black" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="camera" color="black" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Closet"
        component={ClosetScreen}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="hanger" color="black" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   bottomNav: {
//     justifyContent: "center",
//     color: "black",
//   },
// });

export default BottomNav;
