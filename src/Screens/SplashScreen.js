import {
  ActivityIndicator,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import React from "react";
import Logo from "../../assets/flipcart.png";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"blue"} />
      <View></View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
        <ActivityIndicator size="small" color="#fff" style={{ marginTop: 5 }} />
        <Text style={styles.text}>SplashScreen App</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Made With ❤ By India</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "blue",
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoContainer: {
    alignItems: "center",
  },
  bottomContainer: {},
  bottomText: {
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
});
