import {
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import CategoryCard from "../components/category-card";
import { Category } from "../store/data/trainings";
import { MenuIcon } from "../components/icons";

const categories = [
  Category.laptops(),
  Category.mobiles(),
  Category.accessories(),
];

const HomeScreen = ({ navigation }) => {
  const displayTrainings = [
    Category.mobiles(),
    Category.mensWear(),
    Category.books(),
  ];

  const renderHeader = () => (
    <React.Fragment>
      <Text style={styles.headerTitle} appearance='hint'>
        MOST POPULAR
      </Text>
      <List
        contentContainerStyle={styles.horizontalList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={displayTrainings.reverse()}
        renderItem={renderHorizontalTrainingItem}
      />
    </React.Fragment>
  );

  const renderHorizontalTrainingItem = (info) => (
    <CategoryCard
      style={styles.horizontalItem}
      category={info.item}
      navigation={navigation}
    />
  );

  const renderVerticalTrainingItem = (info) => (
    <CategoryCard
      style={styles.verticalItem}
      category={info.item}
      navigation={navigation}
    />
  );

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };

  const menuRenderer = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleDrawer} />
  );

  return (
    <React.Fragment>
      <StatusBar barStyle={"dark-content"} />
      <SafeAreaView style={{ flex: 1, margin: 5 }}>
        <TopNavigation
          title='Home'
          alignment='center'
          accessoryLeft={menuRenderer}
          // rightControls={[overflowMenu()]}
        />
        <List
          contentContainerStyle={styles.list}
          data={categories}
          renderItem={renderVerticalTrainingItem}
          ListHeaderComponent={renderHeader}
        />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
  },
  headerTitle: {
    marginHorizontal: 16,
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  horizontalItem: {
    width: 256,
    marginHorizontal: 8,
  },
});
