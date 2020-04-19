import React, { useEffect } from "react";
import { View, Text } from "react-native";

export const SpInfo = ({ sp }) => {
  return (
    <View style={styles.container}>
      <Text style={{}}>
        {sp.firstname} {sp.lastname}
      </Text>
      <Text style={styles.jobTitle}>{sp.jobTitle} </Text>
    </View>
  );
};

const styles = {
  container: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  jobTitle: {
    color: "#8edbef",
    fontSize: 18,
  },
};
