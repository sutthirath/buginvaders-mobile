import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.font}>Wave 0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: `${10}%`,
    width: `${100}%`,
    backgroundColor: "black"
  },

  font: {
    color: "white"
  }
});
