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
import { connect } from "react-redux";
import * as actions from "../actions";
import { Actions } from "react-native-router-flux";
import SafeAreaView from "react-native-safe-area-view";

class MainContainer extends Component {
  renderItem = selectedNabe => {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => Actions.orderScreen({ selectedNabe })}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: selectedNabe.item.image
            }}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.listTitle}>{selectedNabe.item.name}</Text>
          <Text style={styles.listInfo}>{selectedNabe.item.price}</Text>
        </View>
      </View>
    );
  };
  header = name => {
    let sentence = `みんなで${name}パ！`;
    if (name == "レシピ") {
      sentence = `実は簡単パーティレシピ！`;
    }
    return (
      <View style={styles.header}>
        <Text style={styles.partyTitle}>{sentence}</Text>
      </View>
    );
    // }
  };
  render() {
    const { nabe, takoyaki, okonomiyaki, recipe } = this.props;
    console.log(okonomiyaki);
    return (
      <SafeAreaView style={styles.safeAreaStyle} forceInset={{ top: "always" }}>
        <View style={styles.container}>
          <ScrollView>
            <View style={{ flexDirection: "row", flex: 1 }}>
              {this.header("ナベ")}
              <Image
                style={{
                  width: 120,
                  height: 30,
                  position: "absolute",
                  right: 4,
                  top: 0
                }}
                resizeMode={"contain"}
                source={require("../images/icon.png")}
              />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
            >
              <FlatList
                data={nabe.map(item => {
                  return {
                    key: item.nabeId,
                    name: item.name,
                    image: item.image,
                    price: item.price
                  };
                })}
                scrollEnabled={false}
                contentContainerStyle={styles.flatListContainer}
                numColumns={10}
                renderItem={this.renderItem}
              />
            </ScrollView>
            {this.header("たこ")}

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
            >
              <FlatList
                data={takoyaki.map(item => {
                  return {
                    key: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price
                  };
                })}
                scrollEnabled={false}
                contentContainerStyle={styles.flatListContainer}
                numColumns={10}
                renderItem={this.renderItem}
              />
            </ScrollView>
            {this.header("お好み焼き")}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
            >
              <FlatList
                data={okonomiyaki.map(item => {
                  return {
                    key: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price
                  };
                })}
                scrollEnabled={false}
                contentContainerStyle={styles.flatListContainer}
                numColumns={10}
                renderItem={this.renderItem}
              />
            </ScrollView>
            {this.header("レシピ")}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
            >
              <FlatList
                data={recipe.map(item => {
                  return {
                    key: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price
                  };
                })}
                scrollEnabled={false}
                contentContainerStyle={styles.flatListContainer}
                numColumns={10}
                renderItem={this.renderItem}
              />
            </ScrollView>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    nabe: state.nabe,
    takoyaki: state.takoyaki,
    okonomiyaki: state.okonomiyaki,
    recipe: state.recipe
  };
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
  3;
const list_height = list_width * 1;
const headerBackGroundColor = "white";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 12
  },
  safeAreaStyle: {
    flex: 1,
    backgroundColor: headerBackGroundColor
  },
  listContainer: {
    // width: list_width,
    // height: list_height,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 16
  },
  flatListContainer: {
    // backgroundColor: "red",
    marginLeft: primary_side_margin,
    marginRight: primary_side_margin,
    marginTop: primary_side_margin + 4,
    alignItems: "flex-start",
    //justifyContent: "center"
    flexDirection: "row"
  },
  partyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#49444f"
  },
  imageStyle: {
    width: list_width,
    height: list_height,
    borderRadius: 8
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#49444f"
  },
  listInfo: {
    fontSize: 10,
    fontWeight: "500",
    color: "#49444f",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    marginLeft: primary_side_margin + 8,
    backgroundColor: headerBackGroundColor
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "black"
  }
});
