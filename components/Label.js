import React from "react";
import { StyleSheet, View } from "react-native";
import * as theme from "../constants/theme";

const Label = (props) => {
  const {
    blue,
    green,
    red,
    yellow,
    teal,
    purple,
    black,
    white,
    gray,
    color,
    style,
    children,
    ...restProps
  } = props;

  const labelStyles = [
    styles.label,
    color && { backgroundColor: color },
    blue && { backgroundColor: theme.colors.blue },
    green && { backgroundColor: theme.colors.green },
    red && { backgroundColor: theme.colors.red },
    yellow && { backgroundColor: theme.colors.yellow },
    teal && { backgroundColor: theme.colors.teal },
    purple && { backgroundColor: theme.colors.purple },
    black && { backgroundColor: theme.colors.black },
    white && { backgroundColor: theme.colors.white },
    gray && { backgroundColor: theme.colors.gray },
    style,
  ];

  return (
    <View style={labelStyles} {...restProps}>
      {children}
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  label: {
    margin: 4,
    width: 12,
    height: 12,
    borderRadius: 12,
  },
});
