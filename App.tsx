import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import Chanel from "./src/components/Chanel";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Chanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
