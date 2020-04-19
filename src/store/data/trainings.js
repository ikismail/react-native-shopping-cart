export const TrainingLevel = {
  EASY: "Easy",
  MIDDLE: "Middle",
  HARD: "Hard",
};

export class Training {
  constructor(title, duration, level, image) {
    this.title = title;
    this.duration = duration;
    this.level = level;
    this.image = image;
  }

  get formattedLevel() {
    return `${this.level} Level`;
  }

  get formattedDuration() {
    return `${this.duration} min`;
  }

  static chestEasy() {
    return new Training(
      "Chest",
      55,
      TrainingLevel.EASY,
      require("../../../assets/trainings/image-training-1.jpg")
    );
  }

  static workoutEasy() {
    return new Training(
      "Chest",
      55,
      TrainingLevel.EASY,
      require("../../../assets/trainings/image-training-2.jpg")
    );
  }

  static personalizedEasy() {
    return new Training(
      "Personalized Training",
      55,
      TrainingLevel.EASY,
      require("../../../assets/trainings/image-training-3.jpg")
    );
  }

  static chestMiddle() {
    return new Training(
      "Chest",
      55,
      TrainingLevel.MIDDLE,
      require("../../../assets/trainings/image-training-4.jpg")
    );
  }

  static bicepsMiddle() {
    return new Training(
      "Biceps",
      55,
      TrainingLevel.MIDDLE,
      require("../../../assets/trainings/image-training-5.jpg")
    );
  }

  static personalizedMiddle() {
    return new Training(
      "Personalized Training",
      55,
      TrainingLevel.MIDDLE,
      require("../../../assets/trainings/image-training-1.jpg")
    );
  }

  static chestHard() {
    return new Training(
      "Chest",
      55,
      TrainingLevel.HARD,
      require("../../../assets/trainings/image-training-2.jpg")
    );
  }

  static bicepsHard() {
    return new Training(
      "Biceps",
      55,
      TrainingLevel.HARD,
      require("../../../assets/trainings/image-training-3.jpg")
    );
  }

  static workoutHard() {
    return new Training(
      "Workout",
      55,
      TrainingLevel.HARD,
      require("../../../assets/trainings/image-training-4.jpg")
    );
  }
}
