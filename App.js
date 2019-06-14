import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { ScreenOrientation } from "expo";

import Arena from "./components/Arena.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blood: 8,
      wave: 1,
      points: 0
    };
  }
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }

  render() {
    const parent = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Header state={parent} />
        <Arena wave={parent.wave} />
        <Footer state={parent} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
  }
});
