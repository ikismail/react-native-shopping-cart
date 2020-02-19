import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme";

const { width } = Dimensions.get("window");

const Button = (props) => {
  const { style, full, opacity, children, ...restProps } = props;
  const buttonStyles = [styles.button, full && styles.full, style];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...restProps}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.blue,
    borderRadius: 4,
    height: 55,
    paddingVertical: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  full: {
    width: width - 50,
  },
});
