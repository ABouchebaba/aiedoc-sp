import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BackImage, Header, Switch } from "../components";
import { setOnlineState } from "../Store/actions";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const powerOnColor = "white";
const powerOffColor = "#d61f2c";
const colors = [powerOffColor, powerOnColor];

const Home = (props) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  const powerColor = user.state !== "notReady" ? colors : colors.reverse();

  console.log(user.state);

  const toggleOnline = () => {
    if (user.state !== "notReady") {
      dispatch(setOnlineState(user._id, "notReady"));
    } else {
      dispatch(setOnlineState(user._id, "ready"));
    }
  };

  const enableEmergency = () => {
    dispatch(setOnlineState(user._id, "emergencyReady"));
  };
  const disableEmergency = () => {
    dispatch(setOnlineState(user._id, "ready"));
  };

  return (
    <BackImage source={require("../../assets/bg/bgHome.png")}>
      <Header />
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.label}>Solde</Text>
          <Text style={styles.balanceText}>{user.balance} DA</Text>
        </View>
        <TouchableOpacity
          onPress={toggleOnline}
          style={[styles.power, { backgroundColor: powerColor[0] }]}
        >
          <Ionicons name="ios-power" size={55} color={powerColor[1]} />
        </TouchableOpacity>
        <Switch
          state={user.state}
          enable={enableEmergency}
          disable={disableEmergency}
        />
      </View>
    </BackImage>
  );
};

const styles = {
  wrapper: {
    height: 0.6 * height,
    maxHeight: 500,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "white",
    fontSize: 18,
  },
  balanceText: {
    left: -15,
    backgroundColor: "white",
    color: "red",
    maxWidth: 250,
    minWidth: 150,
    padding: 15,
    marginTop: 10,
    borderRadius: 50,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  power: {
    borderWidth: 1,
    borderColor: "#efefef",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  emergency: {
    backgroundColor: "red",
    width: 100,
    height: 50,
    borderRadius: 20,
    overflow: "hidden",
  },
};

export default Home;
