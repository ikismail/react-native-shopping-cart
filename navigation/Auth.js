import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "../screens/Login";
import Register from "../screens/Register";

export default createStackNavigator(
  {
    Login,
    Register
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);
