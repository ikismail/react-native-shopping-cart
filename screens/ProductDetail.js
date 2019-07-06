import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class ProductDetail extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.ProductDetailContainer}>
        <Text> ProductDetail {params.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ProductDetailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
