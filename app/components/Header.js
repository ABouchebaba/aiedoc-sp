import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Header = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Entypo name="menu" size={60} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Hi")}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/boutique.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Hi")}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/emergency.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});
