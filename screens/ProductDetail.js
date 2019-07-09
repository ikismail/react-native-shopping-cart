import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image
} from "react-native";
import * as theme from "../constants/theme";
import { Card, Block, Text } from "../components";
import { Tabs, Tab } from "native-base";
export default class ProductDetail extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      // <View style={styles.ProductDetailContainer}>
      //   <Text> ProductDetail {params.data}</Text>
      // </View>
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 5 }}>
          <Card style={[styles.margin]}>
            <Block flex={1.2} center middle style={{ marginRight: 20 }}>
              <Image
                style={styles.productImage}
                source={require("../assets/images/products/realme1.png")}
              />
            </Block>
            <Block>
              <Text h4 color="black2">
                Realme 1 (Solar Red, 4GB RAM, 64GB Storage)
              </Text>
              <Text paragraph color="black3">
                Camera: 13 MP Rear camera with Fast facial unlock in less than
                0.1 second with AI Recognition | 8 MP front camera Display: 15.2
                centimeters (6-inch) Full HD 1080p capacitive touchscreen
                display with 2160x1080 pixels
              </Text>
            </Block>
          </Card>

          <Tabs>
            <Tab heading="Specification">
              <Card style={[styles.margin, { marginTop: 5 }]}>
                <Block>
                  <Text paragraph color="black3">
                    Camera: 13 MP Rear camera with Fast facial unlock in less
                    than 0.1 second with AI Recognition | 8 MP front camera
                    Display: 15.2 centimeters (6-inch) Full HD 1080p capacitive
                    touchscreen display with 2160x1080 pixels
                  </Text>
                </Block>
              </Card>
            </Tab>
            <Tab heading="Waranty Info">
              <Card style={[styles.margin, { marginTop: 5 }]}>
                <Block>
                  <Text paragraph color="black3">
                    1 year manufacturer warranty for device and 6 months
                    manufacturer warranty for in-boxx accessories including
                    batteries from the date of purchase
                  </Text>
                </Block>
              </Card>
            </Tab>
            <Tab heading="Reviews">{/* <Tab3 /> */}</Tab>
          </Tabs>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    marginHorizontal: 10
  },
  productImage: {
    width: 140,
    height: 140
  },
  overview: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.colors.white
  },
  ProductDetailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
