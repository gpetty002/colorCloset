import React, { useState, useEffect } from "react";
import { Animated, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../assets/colors";

const AnimatedCircles = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random position
      const left = Math.random() * (Dimensions.get("window").width - 200);
      const top = Math.random() * (Dimensions.get("window").height - 200);

      // Update circle position
      setCirclePosition({ x: left, y: top });

      // Animate opacity
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }, 200); // Change position every second

    return () => clearInterval(interval);
  }, [opacity]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: Colors.animatedDot1,
            opacity: opacity,
            transform: [
              { translateX: circlePosition.x },
              { translateY: circlePosition.y },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: Colors.animatedDot1,
            opacity: opacity,
            transform: [
              { translateX: circlePosition.x },
              { translateY: circlePosition.y },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: Colors.animatedDot1,
            opacity: opacity,
            transform: [
              { translateX: circlePosition.x },
              { translateY: circlePosition.y },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: Colors.animatedDot1,
            opacity: opacity,
            transform: [
              { translateX: circlePosition.x },
              { translateY: circlePosition.y },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: Colors.animatedDot1,
            opacity: opacity,
            transform: [
              { translateX: circlePosition.x },
              { translateY: circlePosition.y },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: Colors.animatedDot1,
            opacity: opacity,
            transform: [
              { translateX: circlePosition.x },
              { translateY: circlePosition.y },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
  },
});

export default AnimatedCircles;
