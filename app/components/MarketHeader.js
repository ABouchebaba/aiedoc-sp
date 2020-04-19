import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Entypo, SimpleLineIcons } from "@expo/vector-icons";

export const MarketHeader = (props) => {
  return (
    <View style={styles.image}>
      <View style={styles.headerActions}>
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <SimpleLineIcons name="menu" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Hi")}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/logo_V2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Hi")}>
          <SimpleLineIcons name="basket" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  headerActions: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf:'center',
    width:"90%"
  },
  tinyLogo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
