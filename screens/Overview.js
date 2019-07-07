import React, { Component } from "react";
import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";

import { Block, Card, Text, Icon, Label } from "../components";
import * as theme from "../constants/theme";
import { DrawerActions } from "react-navigation";
import ProductCard from "../components/ProductCard";
import { Button, View } from "native-base";

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.colors.white
  },
  margin: {
    marginHorizontal: 10
  },
  driver: {
    marginBottom: 11
  },
  avatar: {
    width: 48,
    height: 48
  }
});

class Overview extends Component {
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
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 5 }}>
          {/* Status */}
          <Card row middle style={[styles.margin, { marginTop: 18 }]}>
            <Block flex={1.2} center middle style={{ marginRight: 20 }}>
              <Text light height={43} size={36} spacing={-0.45}>
                86
              </Text>
              <Text
                ligth
                caption
                center
                style={{ paddingHorizontal: 16, marginTop: 3 }}
              >
                OPERATING SCORE
              </Text>
            </Block>
            <Block>
              <Text paragraph color="black3">
                All cars are operating well. There were 1,233 trips since your
                last login.
              </Text>
            </Block>
          </Card>

          {/* Analytics */}
          <Block row style={[styles.margin, { marginTop: 18 }]}>
            <Card middle style={{ marginRight: 7 }}>
              <Icon vehicle />
              <Text h2 style={{ marginTop: 17 }}>
                1,428
              </Text>
              <Text paragraph color="gray">
                Vehicles on track
              </Text>
            </Card>

            <Card middle style={{ marginLeft: 7 }}>
              <Icon distance />
              <Text h2 style={{ marginTop: 17 }}>
                158.3
              </Text>
              <Text paragraph color="gray">
                Distance driven
              </Text>
            </Card>
          </Block>

          {/* Top Mobiles */}
          <Card style={[styles.margin, { marginTop: 5 }]}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Card>

          <Card
            title="TODAY'S TRIPS"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block row right>
              <Block flex={2} row center right>
                <Label blue />
                <Text paragraph color="gray">
                  Today
                </Text>
              </Block>
              <Block row center right>
                <Label purple />
                <Text paragraph color="gray">
                  Yesterday
                </Text>
              </Block>
            </Block>
            <Block>
              <Text>Chart</Text>
            </Block>
          </Card>

          {/* Top Brands */}
          <Card title="TOP BRANDS" style={[styles.margin, { marginTop: 18 }]}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <View>
              <Button transparent style={{ alignSelf: "center" }}>
                <Text style={{ color: "blue" }}>See More</Text>
              </Button>
            </View>
          </Card>

          {/* <Card
            title="TRIPS BY TYPE"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block>
              <Text>Chart</Text>
            </Block>
            <Block row space="between" style={{ marginTop: 25 }}>
              <Block>
                <Text h2 light>
                  1,744
                </Text>
                <Block row center>
                  <Label blue />
                  <Text paragraph color="gray">
                    Confort
                  </Text>
                </Block>
              </Block>
              <Block>
                <Text h2 light>
                  2,312
                </Text>
                <Block row center>
                  <Label purple />
                  <Text paragraph color="gray">
                    Premium
                  </Text>
                </Block>
              </Block>
            </Block>
          </Card> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Overview;
