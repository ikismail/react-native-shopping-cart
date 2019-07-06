import React, { Component } from "react";
import { Image, StyleSheet, Text } from "react-native";
// import Text from "./Text";
import { Content, Card, CardItem, Body, Col, Row, Button } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

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
    flex: 1,
    padding: 5,
    width: 85,
    height: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    marginLeft: 10,
    padding: 5
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  priceText: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
    color: "red"
  },
  descriptionText: {}
});

class ProductCard extends Component {
  render() {
    const { navigation } = this.props;
    const { cardBody, image, description, headerText, priceText } = styles;

    return (
      // Card
      <Card style={{ marginBottom: 0 }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductDetail", {
              data: this.props.product.productName
            })
          }
        >
          <CardItem style={cardBody}>
            <Body>
              <Row>
                <Col size={25}>
                  <Image
                    style={image}
                    source={this.props.product.productImage}
                  />
                </Col>
                <Col size={75} style={description}>
                  <Text style={headerText}>
                    {this.props.product.productName}
                  </Text>
                  <Text ellipsizeMode="tail" numberOfLines={2}>
                    {this.props.product.productDescription}
                  </Text>
                  <Text style={priceText}>
                    ${this.props.product.productPrice}
                  </Text>
                </Col>
              </Row>
            </Body>
          </CardItem>
        </TouchableOpacity>
      </Card>
    );
  }
}

// It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
export default withNavigation(ProductCard);
