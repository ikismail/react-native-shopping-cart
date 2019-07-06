import React from "react";
import { createStackNavigator } from "react-navigation";

import Overview from "../screens/testing";
import ProductDetail from "../screens/ProductDetail";
export default createStackNavigator({
  Overview,
  ProductDetail
});
