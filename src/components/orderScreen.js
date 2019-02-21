import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from "react-native-datepicker";
import OrderListItem from "./orderListItem";
import SafeAreaView from "react-native-safe-area-view";
import Modal from "react-native-modal";
import ModalDone from "./orderDone.js";

class OrderScreen extends Component {
  state = {
    nabeInfo: null,
    nabeId: this.props.selectedNabe.item.key,
    peopleNum: 2,
    date: null,
    isVisible: false,
    isModalVisible: false
  };

  componentWillMount() {
    const { nabeId, peopleNum } = this.state;
    this.setState({ nabeInfo: this.props.nabe[nabeId - 1] });
    const nabeInfo = this.props.nabe[nabeId - 1];
    this.props.selectNabe(nabeId, peopleNum, nabeInfo, this.props.material);
  }

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  priceCalculation = () => {
    const { order } = this.props;
    let price = 0;
    order.food.forEach(f => {
      price +=
        (Math.ceil(f.amount * order.people) + f.changeNum) * f.priceper1 + 500;
    });
    return price;
  };

  renderPeopleNum = () => {
    const { peopleNum } = this.state;

    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemName}>{"人数"}</Text>
        <View style={styles.listItemWrapper}>
          <View style={styles.digitButton}>
            <TouchableOpacity
              onPress={() => {
                peopleNum > 1 && this.setState({ peopleNum: peopleNum - 1 });
                this.props.decreasePeopleNum();
              }}
            >
              <Icon name="minus" size={12} color={"red"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.listItemAmount}>{String(peopleNum)}</Text>
          <View style={styles.digitButton}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ peopleNum: peopleNum + 1 });
                this.props.increasePeopleNum();
              }}
            >
              <Icon name="plus" size={12} color={"red"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  renderDate = () => {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItemName}>お届け日時</Text>
        <DatePicker
          style={{ flex: 1 }}
          date={this.state.date}
          mode="datetime"
          placeholder="希望のお届け日時を選択"
          showIcon={false}
          format="LLL"
          minDate="2019-02-21"
          maxDate="2019-03-21"
          confirmBtnText="完了"
          cancelBtnText="キャンセル"
          customStyles={{
            dateInput: {
              flex: 1,
              borderWidth: 0,
              alignItems: "flex-end"
            },
            placeholderText: {
              color: "#777"
            }
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
      </View>
    );
  };

  renderItem = item => {
    const { peopleNum } = this.state;
    return <OrderListItem item={item} peopleNum={peopleNum} key={item.id} />;
  };

  renderHeader = () => {
    const { nabeInfo } = this.state;
    return (
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: nabeInfo.image
          }}
        />
      </View>
    );
  };

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerContainer}
          onPress={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        >
          <Text style={styles.orderText}>注文へ</Text>
          <Text style={styles.orderPrice}>¥ {this.priceCalculation()}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { nabeId, nabeInfo } = this.state;
    return (
      <SafeAreaView
        style={styles.safeAreaStyle}
        forceInset={{ top: "never", bottom: "always" }}
      >
        <View style={styles.container}>
          {this.renderHeader()}
          <ScrollView style={styles.main}>
            <Text style={styles.nabeName}>
              {nabeInfo.name}
              セット
            </Text>
            {this.renderPeopleNum()}
            <View style={styles.listItemContainer}>
              <Text style={styles.listItemName}>{"食材"}</Text>
            </View>
            {nabeInfo.food.map(item => this.renderItem(item))}
            {this.renderDate()}
            <View style={styles.listItemContainer}>
              <Text style={styles.listItemName}>お届け先住所</Text>
              <Text>東京都文京区根津２丁目...</Text>
            </View>
          </ScrollView>
          {this.renderFooter()}
          <ModalDone isModalVisible={this.state.isVisible} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    nabe: state.nabe,
    material: state.material,
    order: state.order
  };
};

export default connect(
  mapStateToProps,
  actions
)(OrderScreen);

const list_item_side_margin = 4;
const headerBackGroundColor = "white";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  main: {
    padding: 16
  },
  imageStyle: {
    height: 110,
    width: Dimensions.get("window").width
  },
  nabeName: {
    fontSize: 24,
    width: Dimensions.get("window").width,
    textAlign: "center",
    paddingBottom: 8,
    fontWeight: "bold"
  },
  footer: {
    height: 60,
    width: Dimensions.get("window").width,
    backgroundColor: "#FF813A",
    paddingLeft: 30,
    paddingRight: 30
  },
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  orderText: { fontSize: 28, color: "#ffffff", fontWeight: "bold" },
  orderPrice: { fontSize: 24, color: "#ffffff", fontWeight: "bold" },
  listItemContainer: {
    width: Dimensions.get("window").width - 16 * 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    borderBottomWidth: 3,
    borderColor: "#dadada"
  },
  listItemName: {
    paddingTop: 6,
    fontSize: 18,
    fontWeight: "bold"
  },
  listItemAmount: {
    width: 45,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
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
  safeAreaStyle: {
    flex: 1,
    backgroundColor: headerBackGroundColor
  },
  bottomModal: {
    justifyContent: "flex-end",
    marginBottom: 0
  }
});
