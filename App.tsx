import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import Chanel from "./src/components/chanel-scroll/Chanel";
import ChanelPan from "./src/components/chanel-pan/ChanelPan";

export default function App() {
  const [chanelPan, setChanelPan] = useState<boolean | null>(null);
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* eslint-disable-next-line no-nested-ternary */}
      {chanelPan === null ? (
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Chanel Pan Gesture Example"
              onPress={() => setChanelPan(true)}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Chanel ScrollView Example"
              onPress={() => setChanelPan(false)}
            />
          </View>
        </View>
      ) : chanelPan ? (
        <ChanelPan />
      ) : (
        <Chanel />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  buttons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    marginVertical: 20,
  },
});
