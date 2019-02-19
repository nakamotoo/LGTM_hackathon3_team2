import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Actions } from "react-native-router-flux";

class OrderScreen extends Component {
  componentWillMount() {
    console.log(this.props.selectedNabe);
  }
  renderItem = nabe => {
    return <Text>asdfads</Text>;
  };

  render() {
    const { selectedNabe } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.nabe.map(item => this.renderItem(item))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    nabe: state.nabe,
    material: state.material
  };
};

export default connect(
  mapStateToProps,
  actions
)(OrderScreen);

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
