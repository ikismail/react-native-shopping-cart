import { List, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

import TrainingCard from "../components/training-card";
import { Training } from "../store/data/trainings";

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
  const displayTrainings = trainings.filter(
    (training) => training.level === "Easy"
  );

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
    <TrainingCard style={styles.horizontalItem} training={info.item} />
  );

  const renderVerticalTrainingItem = (info) => (
    <TrainingCard style={styles.verticalItem} training={info.item} />
  );

  return (
    <List
      contentContainerStyle={styles.list}
      data={trainings}
      renderItem={renderVerticalTrainingItem}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 24,
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
