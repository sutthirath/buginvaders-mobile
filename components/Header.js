import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Health from "./Health";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.font}>{props.state.points}</Text>
      <Health life={props.state.blood} />
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
    color: "white",
    fontSize: 30
  }
});

export default Header;
