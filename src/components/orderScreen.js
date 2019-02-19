import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  DatePickerIOS
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";

class OrderScreen extends Component {
  state = {
    nabeId: this.props.selectedNabe.item.key,
    peopleNum: 2,
    finalAmount: [],
    chosenDate: new Date()
  };

  componentWillMount() {
    const { nabe, selectedNabe } = this.props;
    const itemNumbers = nabe[selectedNabe.item.key - 1].food.length;
    let tmpArray = [];
    for (var i = 0; i < itemNumbers; i++) {
      tmpArray.push(nabe[selectedNabe.item.key - 1].food[i]);
    }
    this.setState({ finalAmount: tmpArray });
  }

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  renderPeopleNum = () => {
    const { peopleNum } = this.state;

    return (
      <View style={styles.listItemContainer}>
        <View style={styles.container}>
          <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this.setDate}
          />
        </View>
        <Text style={styles.listItemName}>{"人数"}</Text>
        <View style={styles.listItemWrapper}>
          <View style={styles.digitButton}>
            <TouchableOpacity
              onPress={() =>
                peopleNum > 1 && this.setState({ peopleNum: peopleNum - 1 })
              }
            >
              <Icon name="minus" size={12} color={"red"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.listItemAmount}>{String(peopleNum)}</Text>
          <View style={styles.digitButton}>
            <TouchableOpacity
              onPress={() => this.setState({ peopleNum: peopleNum + 1 })}
            >
              <Icon name="plus" size={12} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderItem = item => {
    const { peopleNum } = this.state;
    const integer = Math.ceil(item.amount * peopleNum);
    return (
      <View style={styles.listItemContainer} key={item.id}>
        <Text style={styles.listItemName}>{item.name}</Text>
        <View style={styles.listItemWrapper}>
          <View style={styles.digitButton}>
            <TouchableOpacity>
              <Icon name="minus" size={12} color={"red"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.listItemAmount}>{String(integer)}</Text>
          <View style={styles.digitButton}>
            <TouchableOpacity>
              <Icon name="plus" size={12} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { nabeId } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {this.renderPeopleNum()}
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
  },
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
