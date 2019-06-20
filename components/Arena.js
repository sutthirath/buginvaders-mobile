import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
  Alert
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
      number: Math.floor(this.props.wave * 20)
    });
  }

  async bugCreation() {
    await this.bugNumber();
    const num = this.state.number;
    let arr = [],
      living = new Set();
    for (let i = 0; i < num; i++) {
      arr[i] = (
        <TouchableWithoutFeedback
          key={i}
          onPress={e => this._bugRemove(e, i)}
          /*
          onSomething={event => {
            const x = event.nativeEvent.layout.pageX;
            this.callback(x)
          }}
          */
        >
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
    const width = this.sWidth;
    Animated.timing(this.state.xValue, {
      toValue: width * 3,
      duration: 13000,
      easing: Easing.linear
    }).start();
  }

  _bugRemove = (e, i) => {
    const state = [...this.state.soldiers];
    let bugs = new Map();
    let cache = [...this.state.alive];
    for (let j = 0; j < this.state.number; j++) {
      if (state[cache[j]]) {
        bugs.set(Number(state[cache[j]].key), state[cache[j]]);
      }
    }
    bugs.delete(Number(bugs.get(i).key));
    this.props._updatePoints(15);
    this.waveWin(bugs.size);
    return this.setState({
      soldiers: [...bugs.values()],
      alive: new Set(cache)
    });
  };

  bugBite() {
    this.props._updateBlood(1);
  }

  waveWin(bugs) {
    if (bugs === 0) {
      return Alert.alert("You Win!", "Ready for the next wave?");
    }
  }

  componentDidMount() {
    this.bugCreation();
  }

  componentDidUpdate() {
    this.bugMovement();
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
