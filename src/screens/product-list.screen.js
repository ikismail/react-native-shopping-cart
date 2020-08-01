import React from "react";
import {
  Dimensions,
  ImageBackground,
  ListRenderItemInfo,
  View,
  SafeAreaView,
} from "react-native";
import {
  Button,
  Card,
  List,
  StyleService,
  Text,
  useStyleSheet,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { CartIcon, BackIcon } from "../components/icons";
import * as fakeData from "../store/data/fake_data";

const productSwitch = (category) => {
  switch (category) {
    case "BOOKS":
      return [
        fakeData.book1(),
        fakeData.book2(),
        fakeData.book3(),
        fakeData.book4(),
        fakeData.book5(),
      ];
    case "CLOTHINGS":
      return [
        fakeData.clothing1(),
        fakeData.clothing2(),
        fakeData.clothing3(),
        fakeData.clothing4(),
        fakeData.clothing5(),
      ];
    case "ACCESSORIES":
      return [
        fakeData.access1(),
        fakeData.access2(),
        fakeData.access3(),
        fakeData.access4(),
        fakeData.access5(),
      ];
    case "LAPTOPS":
      return [
        fakeData.laptop1(),
        fakeData.laptop2(),
        fakeData.laptop3(),
        fakeData.laptop4(),
        fakeData.laptop5(),
      ];
    default:
      return [
        fakeData.book1(),
        fakeData.book2(),
        fakeData.book3(),
        fakeData.book4(),
        fakeData.book5(),
      ];
  }
};

const ProductListScreen = ({ navigation, route }) => {
  /* 2. Get the param */
  const { category } = route.params;

  const styles = useStyleSheet(themedStyles);

  const displayProducts = productSwitch(category);

  const onItemPress = (index) => {
    navigation && navigation.navigate("ProductDetail");
  };

  const onItemCartPress = (index) => {
    // navigation && navigation.navigate("ShoppingCart");
  };

  const renderItemFooter = (info) => (
    <View style={styles.itemFooter}>
      <Text category='s1'>{info.item.formattedPrice}</Text>
      <Button
        style={styles.iconButton}
        size='small'
        accessoryRight={CartIcon}
        onPress={() => onItemCartPress(info.index)}
      />
    </View>
  );

  const renderItemHeader = (info) => (
    <ImageBackground style={styles.itemHeader} source={info.item.image} />
  );

  const renderProductItem = (info) => (
    <Card
      style={styles.productItem}
      header={() => renderItemHeader(info)}
      footer={() => renderItemFooter(info)}
      onPress={() => onItemPress(info.index)}>
      <Text category='s1'>{info.item.title}</Text>
      <Text appearance='hint' category='c1'>
        {info.item.category}
      </Text>
    </Card>
  );

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1, margin: 5 }}>
        <TopNavigation
          title={`Products List ${category}`}
          alignment='center'
          accessoryLeft={BackAction}
          // rightControls={[overflowMenu()]}
        />
        <List
          contentContainerStyle={styles.productList}
          data={(displayProducts.length && displayProducts) || products}
          numColumns={2}
          renderItem={renderProductItem}
        />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default ProductListScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-2",
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  productItem: {
    flex: 1,
    margin: 8,
    maxWidth: Dimensions.get("window").width / 2 - 24,
    backgroundColor: "background-basic-color-1",
  },
  itemHeader: {
    height: 140,
  },
  itemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
