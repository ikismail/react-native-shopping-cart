import React from "react";
import { StyleSheet, View } from "react-native";

const Block = (props) => {
  const {
    flex,
    row,
    center,
    middle,
    right,
    space,
    style,
    children,
    ...restProps
  } = props;
  const blockStyles = [
    styles.block,
    flex && { flex },
    flex === "disabled" && { flex: 0 },
    center && styles.center,
    middle && styles.middle,
    right && styles.right,
    space && { justifyContent: `space-${space}` },
    row && styles.row,
    style,
  ];
  return (
    <View style={blockStyles} {...restProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  center: {
    alignItems: "center",
  },
  middle: {
    justifyContent: "center",
  },
  right: {
    justifyContent: "flex-end",
  },
});

export default Block;
