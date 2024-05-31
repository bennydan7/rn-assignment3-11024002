import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Categories = ({ title, taskNumber, categoryImage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.taskNumber}>
        {taskNumber > 1 ? `${taskNumber} Tasks` : `${taskNumber} Task`}
      </Text>
      <Image source={categoryImage} resizeMode="contain" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 245,
    marginLeft: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  taskNumber: {
    fontWeight: "600",
    fontSize: 16,
    color: "black",
    marginTop: 8,
  },
  image: {
    width: 210,
    height: 210,
    marginTop: 8,
  },
});

export default Categories;
