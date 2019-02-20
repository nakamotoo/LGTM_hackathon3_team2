import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-datepicker";

class OrderListItem extends Component {
  state = {
    changeNum: 0
  };

  componentWillMount() {}

  render() {
    const { peopleNum, item } = this.props;
    const { changeNum } = this.state;
    const integer = Math.ceil(item.amount * peopleNum) + changeNum;

    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemName}>{item.name}</Text>
        <View style={styles.listItemWrapper}>
          <View style={styles.digitButton}>
            <TouchableOpacity
              onPress={() => {
                integer > 0 && this.setState({ changeNum: changeNum - 1 });
                this.props.decreaseFoodNum(item.id);
              }}
            >
              <Icon name="minus" size={12} color={"red"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.listItemAmount}>{String(integer)}</Text>
          <View style={styles.digitButton}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ changeNum: changeNum + 1 });
                this.props.increaseFoodNum(item.id);
              }}
            >
              <Icon name="plus" size={12} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>
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
)(OrderListItem);

const list_item_side_margin = 4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  listItemContainer: {
    width: Dimensions.get("window").width - 16 * 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 36
  },
  listItemName: {},
  listItemAmount: { width: 45, textAlign: "center" },
  listItemWrapper: {
    flexDirection: "row"
  },
  digitButton: {
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 0.7,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
