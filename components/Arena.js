import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import soldier from "../assets/soldier.png";

export default class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soldiers: []
    };
  }

  bugCreation() {
    const num = Math.floor(this.props.wave * 10);
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(
        <Image
          source={soldier}
          key={i}
          style={[styles.bug, this.bugPosition()]}
        />
      );
    }
    return this.setState({
      soldiers: arr
    });
  }

  bugPosition() {
    return {
      left: Math.trunc(Math.random() * -700),
      top: Math.trunc(Math.random() * 300)
    };
  }

  componentDidMount() {
    this.bugCreation();
  }

  render() {
    return (
      <View style={styles.arena}>
        <View>{this.state.soldiers}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arena: {
    height: `${80}%`,
    width: `${100}%`,
    backgroundColor: "rgb(120,72,0)"
  },
  bug: {
    position: "absolute",
    margin: 0,
    padding: 0,
    width: 40,
    height: 50
  }
});
