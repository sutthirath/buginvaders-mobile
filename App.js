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
      blood: 8
    };
  }
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Header blood={this.state.blood} />
        <Arena />
        <Footer />
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
