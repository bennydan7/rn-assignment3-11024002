import React from "react";
import { View, Text } from "react-native";

const OngoingTask = ({ taskName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{taskName}</Text>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 16, // Increased horizontal padding for more space
    paddingVertical: 12, // Increased vertical padding for more space
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#D1D5DB", // Assuming secondary-200 is represented by this color
    marginBottom: 8, // Increased margin for more space between items
    backgroundColor: "#FFFFFF", // Assuming white background
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000000", // Assuming black color
    marginBottom: 4,
    textAlign: "left",
  },
};

export default OngoingTask;
