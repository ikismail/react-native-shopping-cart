import { createDrawerNavigator } from "@react-navigation/drawer";
import { Divider, Drawer, DrawerItem } from "@ui-kitten/components";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import { BellIcon, ForwardIcon, HomeIcon } from "../components/icons";

import LoginScreen from "../screens/login.screen";
import NotificationScreen from "../screens/notification.screen";

import BottomNavigation from "./bottomNavigator.route";

const { Navigator, Screen } = createDrawerNavigator();

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require("../../assets/icon.png")}
    />
    <Divider />
  </React.Fragment>
);

const DrawerContent = ({ navigation, state }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const navigate = (index) => {
    setSelectedIndex(index);
    navigation.navigate(state.routeNames[index.row]);
  };
  return (
    <Drawer
      header={Header}
      selectedIndex={selectedIndex}
      onSelect={(index) => navigate(index)}>
      <DrawerItem
        title='Home'
        accessoryLeft={HomeIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title='Notifications'
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  );
};

const DrawerNavigator = () => {
  return (
    <Navigator
      initialRouteName='Login'
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Screen name='Home' component={BottomNavigation} />
      <Screen name='Notifications' component={NotificationScreen} />
      <Screen name='Login' component={LoginScreen} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 250,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DrawerNavigator;
