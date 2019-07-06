import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Icon, Block, Text } from "../components";
import { DrawerActions } from "react-navigation";
import {
  Content,
  Card,
  CardItem,
  Body,
  Col,
  Row,
  Footer,
  Button
} from "native-base";
import ProductCard from "../components/ProductCard";

const styles = StyleSheet.create({
  cardBody: {},
  cardFooter: {
    marginTop: -15
  },
  cardFooterButton: {
    flex: 1,
    alignSelf: "center",
    padding: 10,
    width: 120,
    backgroundColor: "darkgreen"
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
    color: "white"
  },
  image: {
    padding: 5,
    width: 85,
    height: 70
  },
  description: {
    marginLeft: 10,
    padding: 5
  }
});

const product = {
  productName: "Realme 1 (Solar Red, 4GB RAM, 64GB Storage)",
  productDescription: `Camera: 13 MP Rear camera with Fast facial unlock in less than 0.1 second with AI Recognition | 8 MP front camera
  Display: 15.2 centimeters (6-inch) Full HD 1080p capacitive touchscreen display with 2160x1080 pixels`,
  productImage: require('../assets/images/products/realme1.png'),
  productPrice: "14.00"
};

export default class testing extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeftContainerStyle: {
      paddingLeft: 24
    },
    headerRightContainerStyle: {
      paddingRight: 24
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Icon menu />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity>
        <Icon notification />
      </TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle>
        <Text h4>Overview</Text>
      </Block>
    )
  });

  render() {
    return (
      <Content>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </Content>
    );
  }
}
