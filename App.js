/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

import { DrawerNavigator } from "./src/routes";
import store from "./src/store/store";
import theme from "./theme.json";

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle={"dark-content"} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Provider store={store}>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </Provider>
      </ApplicationProvider>
    </>
  );
};

export default App;
