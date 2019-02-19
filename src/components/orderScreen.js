import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Actions } from "react-native-router-flux";

class OrderScreen extends Component {
  state = { nabeId: this.props.selectedNabe.item.key };

  renderItem = item => {
    return (
      <View style={styles.listItemContainer} key={item.id}>
        <Text style={styles.listItemName}>{item.name}</Text>
        <Text style={styles.listItemAmount}>{item.amount}</Text>
      </View>
    );
  };

  render() {
    const { nabeId } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {this.props.nabe[nabeId - 1].food.map(item => this.renderItem(item))}
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

const list_item_side_margin = 4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  listItemContainer: {
    width: Dimensions.get("window").width,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 44,
    borderBottomWidth: 0.5,
    borderColor: "#555",
    paddingLeft: list_item_side_margin,
    paddingRight: list_item_side_margin
  },
  listItemName: {},
  listItemAmount: {}
});
