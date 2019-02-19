import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Platform,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Actions } from "react-native-router-flux";
import SafeAreaView from "react-native-safe-area-view";

class MainContainer extends Component {
  renderItem = list => {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => Actions.orderScreen()}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: list.item.image
            }}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.listTitle}>{list.item.name}</Text>
        </View>
      </View>
    );
  };
  render() {
    const { nabe } = this.props;
    return (
<<<<<<< HEAD
      <SafeAreaView style={styles.safeAreaStyle} forceInset={{ top: "always" }}>
        <View style={styles.container}>
          <Header />
          <ScrollView>
            <FlatList
            data={nabe.map(item => {
              return {
                key: item.nabeId,
                name: item.name,
                image: item.image
              };
            })}
              contentContainerStyle={styles.flatListContainer}
              numColumns={2}
              renderItem={this.renderItem}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return { nabe: state.nabe };
};

export default connect(
  mapStateToProps,
  actions
)(MainContainer);

const primary_side_margin = 8;
const list_item_side_margin = 4;
const list_width =
  (Dimensions.get("window").width -
    (list_item_side_margin * 4 + primary_side_margin * 2)) /
  2;
const list_height = list_width * 1.2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  listContainer: {
    // width: list_width,
    // height: list_height,
    justifyContent: "center",
    alignItems: "center",
    margin: 4
  },
  flatListContainer: {
    // backgroundColor: "red",
    marginLeft: primary_side_margin,
    marginRight: primary_side_margin,
    marginTop: primary_side_margin + 4,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  imageStyle: {
    width: list_width,
    height: list_height,
    borderRadius: 8
  },
  listTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#49444f"
  },
  textContainer: {
    marginTop: 8
  }
});
