import {
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import TrainingCard from "../components/training-card";
import { Training } from "../store/data/trainings";
import { MenuIcon } from "../components/icons";

const trainings = [
  Training.chestEasy(),
  Training.workoutEasy(),
  Training.personalizedEasy(),
  Training.bicepsMiddle(),
  Training.chestMiddle(),
  Training.personalizedMiddle(),
  Training.bicepsHard(),
  Training.workoutHard(),
  Training.chestHard(),
];

const HomeScreen = ({ navigation }) => {
  const displayTrainings = trainings;

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
    <TrainingCard
      style={styles.horizontalItem}
      training={info.item}
      navigation={navigation}
    />
  );

  const renderVerticalTrainingItem = (info) => (
    <TrainingCard
      style={styles.verticalItem}
      training={info.item}
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
          data={trainings}
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
