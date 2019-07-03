import React, { Component } from "react";
import { Image, StyleSheet, Text } from "react-native";
// import Text from "./Text";
import { Content, Card, CardItem, Body, Col, Row, Button } from "native-base";

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

export default class ProductCard extends Component {
  render() {
    const { cardBody, image, description, headerText, priceText } = styles;

    return (
      // Card
      <Card style={{ marginBottom: 0 }}>
        <CardItem style={cardBody}>
          <Body>
            <Row>
              <Col size={25}>
                <Image
                  style={image}
                  source={{
                    uri: this.props.product.productImage,
                    cache: "default"
                  }}
                />
              </Col>
              <Col size={75} style={description}>
                <Text style={headerText}>{this.props.product.productName}</Text>
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
        {/* <CardItem footer style={cardFooter}>
              <Col>
                <Button small style={cardFooterButton}>
                  <Text style={buttonText}>Sample</Text>
                </Button>
              </Col>
              <Col>
                <Button small style={cardFooterButton}>
                  <Text style={buttonText}>Sample</Text>
                </Button>
              </Col>
            </CardItem> */}
      </Card>
    );
  }
}
