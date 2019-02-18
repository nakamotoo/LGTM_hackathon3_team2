import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, Platform } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class MainContainer extends Component {
  changeMessage = () => {
    this.props.helloworld();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions} onPress={() => this.changeMessage()}>
          {this.props.testId}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    testId: state.test.id
  };
};

export default connect(
  mapStateToProps,
  actions
)(MainContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
