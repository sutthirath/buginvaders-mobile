import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = props => {
  return (
    <View style={styles.footer}>
      <Text style={styles.font}>Wave {props.state.wave}</Text>
    </View>
  );
};

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

export default Footer;
