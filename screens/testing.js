import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon, Block, Text } from "../components";
import { DrawerActions } from "react-navigation";
import { Content, Card, CardItem, Body, Col, Row } from "native-base";

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
      // Card
      <>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Row>
                  <Col>
                    <Text>// Card</Text>
                  </Col>
                  <Col>
                    <Text>// Card</Text>
                  </Col>
                  <Col>
                    <Text>// Card</Text>
                  </Col>
                </Row>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </>
    );
  }
}
