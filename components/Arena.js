import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";

import soldier from "../assets/soldier.png";

export default class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soldiers: [],
      number: 0,
      alive: new Set(),
      xValue: new Animated.Value(0)
    };
  }
  sWidth = Dimensions.get("window").width;
  sHeight = Dimensions.get("window").height;

  async bugNumber() {
    return this.setState({
      number: Math.floor(this.props.wave * 5)
    });
  }

  async bugCreation() {
    await this.bugNumber();
    const num = this.state.number;
    let arr = [],
      living = new Set();
    for (let i = 0; i < num; i++) {
      arr[i] = (
        <TouchableWithoutFeedback key={i} onPress={() => this._bugRemove(i)}>
          <Image
            key={i}
            source={soldier}
            style={[styles.bug, this.bugPosition(i)]}
          />
        </TouchableWithoutFeedback>
      );
      living.add(Number(arr[i].key));
    }
    return this.setState({
      soldiers: arr,
      alive: living
    });
  }

  bugPosition(i) {
    return {
      left: Math.trunc(i * -60),
      top: Math.trunc(Math.random() * 295)
    };
  }

  bugMovement() {
    Animated.timing(this.state.xValue, {
      toValue: this.sWidth * 3,
      duration: 15000,
      easing: Easing.linear
    }).start();
  }

  /*--- Test Start ---*/
  _bugRemove = i => {
    const prevState = [...this.state.soldiers];
    let bugs = new Map(),
      cache = new Set(this.state.alive);
    cache.delete(i);
    for (let j = 0; j < this.state.number; j++) {
      if (cache.has(j)) {
        bugs.set(j, prevState[j]);
      }
    }
    bugs.delete(i);
    console.log(bugs.size);
    return this.setState({
      soldiers: [...bugs.values()],
      alive: cache
    });
  };
  /*--- Test End ---*/

  waveWin() {
    if (this.state.soldiers.length === 0) return <Text>Winner!</Text>;
  }

  componentDidMount() {
    this.bugCreation();
  }

  componentDidUpdate() {
    this.bugMovement();
    this.waveWin();
  }

  render() {
    return (
      <View style={styles.arena}>
        <Animated.View style={{ left: this.state.xValue }}>
          {this.state.soldiers}
        </Animated.View>
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
