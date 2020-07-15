import {
  Button,
  Layout,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from "@ui-kitten/components";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { BackIcon, SearchIcon } from "../components/icons";
import { Product } from "../store/data/products";
import { CartItem } from "./cart-item.screen";

const initialProducts = [Product.pinkChair(), Product.blackLamp()];

export const CartScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyle);
  const [products, setProducts] = React.useState(initialProducts);

  const onSearchActionPress = () => {
    // navigation.navigate("ProductList");
  };

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigation.goBack} />
  );

  const renderSearchAction = () => (
    <TopNavigationAction icon={SearchIcon} onPress={onSearchActionPress} />
  );

  const totalCost = () => {
    return products.reduce((acc, product) => acc + product.totalPrice, 0);
  };

  const onItemRemove = (product, index) => {
    products.splice(index, 1);
    setProducts([...products]);
  };

  const onItemChange = (product, index) => {
    products[index] = product;
    setProducts([...products]);
  };

  const renderFooter = () => (
    <Layout style={styles.footer}>
      <Text category='h4' style={{ fontWeight: "normal" }}>
        Total Cost:
      </Text>
      <Text
        category='h4'
        style={{ fontWeight: "normal" }}>{`$${totalCost()}`}</Text>
    </Layout>
  );

  const renderProductItem = (info) => (
    <CartItem
      style={styles.item}
      index={info.index}
      product={info.item}
      onProductChange={onItemChange}
      onRemove={onItemRemove}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, margin: 5 }}>
      <TopNavigation
        title='Shopping Cart'
        alignment='center'
        accessoryLeft={renderBackAction}
        rightControls={[renderSearchAction()]}
      />
      {/* <Layout style={themedStyle.container} level='2'> */}
      <List
        contentContainerStyle={{ paddingVertical: 10 }}
        data={products}
        renderItem={renderProductItem}
        ListFooterComponent={renderFooter}
      />
      <Button style={themedStyle.checkoutButton} size='giant'>
        CHECKOUT
      </Button>
      {/* </Layout> */}
    </SafeAreaView>
  );
};

const themedStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 0.5,
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  checkoutButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
});
