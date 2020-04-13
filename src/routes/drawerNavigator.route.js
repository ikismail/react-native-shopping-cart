import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer, DrawerItem, Divider, Icon} from '@ui-kitten/components';
import React from 'react';
import NotificationScreen from '../screens/notification.screen';
import BottomNavigation from './bottomNavigator.route';
import {ImageBackground, StyleSheet} from 'react-native';

const {Navigator, Screen} = createDrawerNavigator();

const PersonIcon = props => <Icon {...props} name="home-outline" />;

const BellIcon = props => <Icon {...props} name="bell-outline" />;

const ForwardIcon = props => <Icon {...props} name="arrow-ios-forward" />;

const Header = props => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../../assets/icon.png')}
    />
    <Divider />
  </React.Fragment>
);

const DrawerContent = ({navigation, state}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const navigate = index => {
    setSelectedIndex(index);
    navigation.navigate(state.routeNames[index.row]);
  };
  return (
    <Drawer
      header={Header}
      selectedIndex={selectedIndex}
      onSelect={index => navigate(index)}>
      <DrawerItem
        title="Home"
        accessoryLeft={PersonIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Notifications"
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  );
};

const DrawerNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Screen name="Home" component={BottomNavigation} />
      <Screen name="Notifications" component={NotificationScreen} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 250,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DrawerNavigator;
