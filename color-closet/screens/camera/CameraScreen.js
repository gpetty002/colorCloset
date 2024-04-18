// CameraScreen.js

import React, { useEffect, useRef, useState } from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const CameraScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        ref={(ref) => setCameraRef(ref)}
        type={Camera.Constants.Type.back}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <View style={styles.buttonOutline}></View>
          </TouchableOpacity>
        </View>
      </Camera>
      {photoUri && <Image source={{ uri: photoUri }} style={{ flex: 1 }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    position: "absolute",
    left: 160,
    bottom: 20,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOutline: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    width: 80,
    height: 80,
  },
});

export default CameraScreen;
