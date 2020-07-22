import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ImageOverlay } from "./image-overlay";

const CategoryCard = (props) => {
  const { style, category, navigation, ...cardProps } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductList", {
          category: category.getCategory,
        })
      }>
      <ImageOverlay
        style={[style, styles.container, styles.image]}
        source={category.image}>
        <Text style={styles.level} category='s1' status='control'>
          {category.formattedLevel}
        </Text>
        <Text style={styles.title} category='h2' status='control'>
          {category.title}
        </Text>
        {/* <Button style={styles.durationButton} size='tiny' icon={ClockIcon}>
          {category.formattedDuration}
        </Button> */}
      </ImageOverlay>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  image: {
    height: 200,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  level: {
    zIndex: 1,
  },
  title: {
    zIndex: 1,
  },
  durationButton: {
    position: "absolute",
    left: 16,
    bottom: 16,
    borderRadius: 16,
    paddingHorizontal: 0,
  },
});
