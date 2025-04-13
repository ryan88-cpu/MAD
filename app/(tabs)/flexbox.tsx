import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ReducedMotionConfig } from "react-native-reanimated";

const flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <View style={styles.greenContainer} />
      <View style={styles.blueContainer} />
    </View>
  );
};

export default flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly", //main axis
    alignItems: "center", //cross axis
  },
  redContainer: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  greenContainer: {
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
});
