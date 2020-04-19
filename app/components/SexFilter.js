import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

export const SexFilter = ({ style, setFilter, selected }) => {
  const maleStyle = selected["male"]
    ? styles.selectedBtn
    : styles.notSelectedBtn;
  const femaleStyle = selected["female"]
    ? styles.selectedBtn
    : styles.notSelectedBtn;

  const setSexFilter = (gender) => {
    if (Object.keys(selected).length === 0) {
      setFilter("sex", gender);
    } else {
      if (selected[gender]) {
        setFilter("sex", false);
      } else {
        setFilter("sex", false);
        setFilter("sex", gender);
      }
    }
  };

  return (
    <View style={style}>
      <TouchableOpacity
        style={[maleStyle, styles.leftBtn]}
        onPress={() => setSexFilter("male")}
      >
        <Image
          style={styles.pin}
          source={require("../../assets/malePin.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[femaleStyle, styles.rightBtn]}
        onPress={() => setSexFilter("female")}
      >
        <Image
          style={styles.pin}
          source={require("../../assets/femalePin.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  leftBtn: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rightBtn: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  selectedBtn: {
    padding: 10,
    backgroundColor: "#5cb85c",
  },
  notSelectedBtn: {
    padding: 10,
    backgroundColor: "white",
  },
  pin: {
    width: 45,
    height: 45,
  },
};
