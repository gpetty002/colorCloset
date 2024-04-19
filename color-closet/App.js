import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import HomeScreen from "./screens/home/HomeScreen";
import FeaturedScreen from "./screens/featured/FeaturedScreen";
import CameraScreen from "./screens/camera/CameraScreen";
import ClosetScreen from "./screens/closet/ClosetScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Featured" component={FeaturedScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Closet" component={ClosetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
