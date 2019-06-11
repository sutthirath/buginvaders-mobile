import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ScreenOrientation } from "expo";

import Arena from "./components/Arena.js";

export default class App extends React.Component {
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Arena />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
