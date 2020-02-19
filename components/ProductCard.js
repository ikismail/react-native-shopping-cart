import React from "react";
import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import Block from "./Block";
import Text from "./Text";

const styles = StyleSheet.create({
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
  },
});

const ProductCard = ({ navigation }) => {
  return (
    // Card
    <Block style={styles.driver}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("ProductDetail", {
            data: "Realme 1 (Solar Red, 4GB RAM, 64GB Storage)",
          })
        }>
        <Block row center>
          <Block>
            <Image
              style={styles.avatar}
              source={require("../assets/images/products/realme1.png")}
            />
          </Block>
          <Block flex={2}>
            <Text paragraph ellipsizeMode='tail' numberOfLines={1}>
              Realme 1 (Solar Red, 4GB RAM, 64GB Storage)
            </Text>
            <Text paragraph color='gray' ellipsizeMode='tail' numberOfLines={2}>
              Camera: 13 MP Rear camera with Fast facial unlock in less than 0.1
              second with AI Recognition | 8 MP front camera Display: 15.2
              centimeters (6-inch) Full HD 1080p capacitive touchscreen display
              with 2160x1080 pixels
            </Text>
          </Block>
          <Block>
            <Text paragraph right color='red'>
              $6,432
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    </Block>
  );
};

// It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
export default withNavigation(ProductCard);
