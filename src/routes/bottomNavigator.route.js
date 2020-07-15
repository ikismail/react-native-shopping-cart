import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import React from "react";
import HomeScreen from "../screens/home.screen";
import NewsScreen from "../screens/news.screen";
import OrdersScreen from "../screens/orders.screen";
import ProductDetailScreen from "../screens/product-detail.screen";
import ProductListScreen from "../screens/product-list.screen";
import SettingsScreen from "../screens/settings.screen";
import { CartScreen } from "../screens/cart.screen";

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => <Icon {...props} name='home-outline' />;

const OrdersIcon = (props) => <Icon {...props} name='shopping-cart-outline' />;

const NewsIcon = (props) => <Icon {...props} name='globe-outline' />;

const SettingsIcon = (props) => <Icon {...props} name='settings-outline' />;

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Main' icon={PersonIcon} />
    <BottomNavigationTab title='Orders' icon={OrdersIcon} />
    <BottomNavigationTab title='News' icon={NewsIcon} />
    <BottomNavigationTab title='Settings' icon={SettingsIcon} />
  </BottomNavigation>
);

const BottomNavigator = () => {
  return (
    <Navigator
      initialRouteName='Main'
      tabBar={(props) => <BottomTabBar {...props} />}>
      {/* Bottom Menus */}
      <Screen name='Main' component={HomeScreen} />
      <Screen name='Orders' component={OrdersScreen} />
      <Screen name='News' component={NewsScreen} />
      <Screen name='Settings' component={SettingsScreen} />
      {/* Pages */}
      <Screen name='ProductList' component={ProductListScreen} />
      <Screen name='ProductDetail' component={ProductDetailScreen} />
      <Screen name='Cart' component={CartScreen} />
      <Screen name='Checkout' component={SettingsScreen} />
      <Screen name='Payment' component={SettingsScreen} />
      <Screen name='AddNewCard' component={SettingsScreen} />
    </Navigator>
  );
};

export default BottomNavigator;
