import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Arena extends React.Component {
  render() {
    return (
      <View style={styles.arena}>
        <Text>This is where the arena will be.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arena: {
    height: `${80}%`,
    width: `${100}%`,
    backgroundColor: "rgb(120,72,0)"
  }
});
