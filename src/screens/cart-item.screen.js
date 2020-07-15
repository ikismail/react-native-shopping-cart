import { Button, ListItem, Text } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { CloseIcon, MinusIcon, PlusIcon } from "../components/icons";

export const CartItem = (props) => {
  const {
    style,
    product,
    index,
    onProductChange,
    onRemove,
    ...listItemProps
  } = props;

  const decrementButtonEnabled = () => {
    return product.amount > 1;
  };

  const onRemoveButtonPress = () => {
    // onRemove(product, index);
  };

  const onMinusButtonPress = () => {
    // const updatedProduct = new Product(
    //   product.id,
    //   product.title,
    //   product.subtitle,
    //   product.image,
    //   product.price,
    //   product.amount - 1
    // );
    // onProductChange(updatedProduct, index);
  };

  const onPlusButtonPress = () => {
    // const updatedProduct = new Product(
    //   product.id,
    //   product.title,
    //   product.subtitle,
    //   product.image,
    //   product.price,
    //   product.amount + 1
    // );
    // onProductChange(updatedProduct, index);
  };

  return (
    <ListItem {...listItemProps} style={[styles.container, style]}>
      <Image style={styles.image} source={product.image} />
      <View style={styles.detailsContainer}>
        <Text category='s1'>{product.title}</Text>
        <Text appearance='hint' category='p2'>
          {product.subtitle}
        </Text>
        <Text category='s2'>{product.formattedPrice}</Text>
        <View style={styles.amountContainer}>
          <Button
            style={[styles.iconButton, styles.amountButton]}
            size='tiny'
            accessoryRight={MinusIcon}
            onPress={onMinusButtonPress}
            disabled={!decrementButtonEnabled()}
          />
          <Text style={styles.amount} category='s2'>
            {`${product.amount}`}
          </Text>
          <Button
            style={[styles.iconButton, styles.amountButton]}
            size='tiny'
            accessoryRight={PlusIcon}
            onPress={onPlusButtonPress}
          />
        </View>
      </View>
      <Button
        style={[styles.iconButton, styles.removeButton]}
        appearance='ghost'
        status='basic'
        accessoryRight={CloseIcon}
        onPress={onRemoveButtonPress}
      />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  image: {
    width: 120,
    height: 144,
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    padding: 16,
  },
  amountContainer: {
    position: "absolute",
    flexDirection: "row",
    left: 16,
    bottom: 16,
  },
  amountButton: {
    borderRadius: 16,
  },
  amount: {
    textAlign: "center",
    width: 40,
  },
  removeButton: {
    position: "absolute",
    right: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
