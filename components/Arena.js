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
      xValue: new Animated.Value(0)
    };
  }
  sWidth = Dimensions.get("window").width;
  sHeight = Dimensions.get("window").height;

  bugCreation() {
    const num = Math.floor(this.props.wave * 20);
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(
        <TouchableWithoutFeedback key={i} onPress={() => this._bugRemove(i)}>
          <Image
            key={i}
            source={soldier}
            style={[styles.bug, this.bugPosition(i)]}
          />
        </TouchableWithoutFeedback>
      );
    }
    return this.setState({
      soldiers: arr
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
      duration: 12000,
      easing: Easing.linear
    }).start();
  }

  /*--- Test Start ---*/
  _bugRemove = i => {
    return;
  };
  /*--- Test End ---*/

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
