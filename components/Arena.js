import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./Header.js";

export default class Arena extends React.Component {
  render() {
    return (
      <View style={styles.arena}>
        <Header />
        <Text>This is where the arena will be.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arena: {
    height: `${100}%`,
    width: `${100}%`,
    backgroundColor: "rgb(120,72,0)"
  }
});
