import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Button, Card, Text } from "@ui-kitten/components";
import { ImageOverlay } from "./image-overlay";
import { ClockIcon } from "./icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const TrainingCard = (props) => {
  const { style, training, navigation, ...cardProps } = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
      <ImageOverlay
        style={[style, styles.container, styles.image]}
        source={training.image}>
        <Text style={styles.level} category='s1' status='control'>
          {training.formattedLevel}
        </Text>
        <Text style={styles.title} category='h2' status='control'>
          {training.title}
        </Text>
        <Button style={styles.durationButton} size='tiny' icon={ClockIcon}>
          {training.formattedDuration}
        </Button>
      </ImageOverlay>
    </TouchableOpacity>
  );
};

export default TrainingCard;

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
