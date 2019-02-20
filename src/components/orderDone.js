import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export default class ModalTester extends Component {
  render() {
    const { isModalVisible } = this.props;
    return (
      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>
          <Text>注文内容を友達に共有する!</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>共有リンクをコピー</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 12
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: 216,
    height: 40
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  }
});
