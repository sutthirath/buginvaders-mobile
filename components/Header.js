import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.font}>00000</Text>
      <Text style={styles.font}>+++++</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
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

export default Header;
