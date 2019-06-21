import React from "react";
import { StyleSheet, View, Image } from "react-native";

import blood from "../assets/blood.png";

export default class Heatlh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: []
    };
  }

  makeBlood() {
    let lives = [];
    for (let i = 0; i < this.props.life; i++) {
      lives.push(<Image source={blood} key={i} style={styles.drop} />);
    }
    return this.setState({
      num: lives
    });
  }

  componentDidMount() {
    this.makeBlood();
  }

  render() {
    return <View style={styles.health}>{this.state.num}</View>;
  }
}

const styles = StyleSheet.create({
  health: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  drop: {
    margin: 0,
    padding: 0,
    width: 40,
    height: 50
  }
});
