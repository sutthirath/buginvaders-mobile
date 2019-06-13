import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Health from "./Health";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.font}>00000</Text>
      <Health life={props.blood} />
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
