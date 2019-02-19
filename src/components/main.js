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
  Image
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Actions } from "react-native-router-flux";

class MainContainer extends Component {
  renderItem = list => {
    return (
      <View style={styles.listContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: list.item.image
          }}
        />
        <Text>{list.item.name}</Text>
      </View>
    );
  };
  render() {
    const imageArray = {
      hinabe:
        "https://www.marukome.co.jp/files/recipe/3445/5ab85c53-66b4-4cb2-a24c-a4b91b85f192.jpg",
      motsunabe:
        "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/710648.jpeg",
      misonabe:
        "https://park.ajinomoto.co.jp/wp-content/uploads/2018/03/710396.jpeg",
      gekikaranabe:
        "https://trendy.nikkeibp.co.jp/article/pickup/20150219/1062785/thumb_400_07_px400.jpg"
    };
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={[
              { key: "a", name: "四川風火鍋", image: imageArray.hinabe },
              { key: "b", name: "もつ鍋", image: imageArray.motsunabe },
              { key: "c", name: "味噌鍋", image: imageArray.misonabe },
              { key: "d", name: "激辛", image: imageArray.gekikaranabe }
            ]}
            contentContainerStyle={styles.flatListContainer}
            numColumns={2}
            renderItem={this.renderItem}
          />
        </ScrollView>
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

const primary_side_margin = 4;
const list_item_side_margin = 4;
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
  },
  listContainer: {
    width:
      (Dimensions.get("window").width -
        (list_item_side_margin * 4 + primary_side_margin * 2)) /
      2,
    justifyContent: "center",
    alignItems: "center",
    margin: 4
  },
  flatListContainer: {
    backgroundColor: "red",
    marginLeft: primary_side_margin,
    marginRight: primary_side_margin,
    marginTop: primary_side_margin,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  imageStyle: {
    width: 100,
    height: 100
  }
});
