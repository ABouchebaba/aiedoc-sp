import { FontAwesome, Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, Modal, StyleSheet, Text, View, Animated } from "react-native";

export const InterventionModel = (props) => {
  // const intervention = props.intervention
  const intervention = {
    date: "2012-15-02",
    type: "regular",
    totalPrice: "123",
    services: [
      "service1",
      "service2",
      "service3",
      "service1",
      "service2",
      "service3",
      "service1",
      "service2",
      "service3",
    ],
    sp_name: "3etman bouchlaghem",
    rating: 4,
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.showModel}
      onRequestClose={props.close}
    >
      <View style={styles.modelCard}>
        <View style={styles.modelInfo}>
          <Image
            source={require("../../assets/maleIntervention.png")}
            style={styles.image}
          />
          <Entypo name="calendar" size={20} color="gray">
            <Text style={styles.modelText}> {intervention.date}</Text>
          </Entypo>
          <Entypo name="price-tag" size={20} color="#FFD700">
            <Text style={styles.modelText}> {intervention.totalPrice} DA</Text>
          </Entypo>
          <FontAwesome name="user-md" size={20} color="green">
            <Text style={styles.modelText}> {intervention.sp_name}</Text>
          </FontAwesome>
          <FontAwesome name="user-md" size={20} color="green">
            <Text style={styles.modelText}> {intervention.sp_name}</Text>
          </FontAwesome>
          <FontAwesome name="user-md" size={20} color="green">
            <Text style={styles.modelText}> {intervention.sp_name}</Text>
          </FontAwesome>
          <View style={{ alignItems: "center" }}>
            {/* <FontAwesome name="user-md" size={20} color="green">
            <Text style={styles.modelText}> Services:</Text>
          </FontAwesome> */}
            <Text style={styles.modelText}> Services:</Text>
            <Text style={styles.modelText}>
              {"\n" + intervention.services.toString()}
            </Text>
          </View>
          <View style={styles.ratingView}>
            {[...Array(intervention.rating)].map((x, i) => (
              <Entypo key={i} name="star" size={30} color="#FFD700"></Entypo>
            ))}
          </View>
        </View>
        <Entypo
          name="cross"
          size={60}
          color="white"
          style={styles.icon}
          onPress={props.close}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelCard: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba( 250, 250, 250, 0.5 )",
  },
  modelInfo: {
    backgroundColor: "#4EC7E6",
    width: "70%",
    height: "50%",
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image: {
    width: "100%",
    height: 70,
    resizeMode: "contain",
  },
  modelText: {
    // alignSelf: "center",
    color: "white",
    fontSize: 18,
  },
  ratingView: {
    flexDirection: "row",
    alignSelf: "center",
  },
  icon: {
    backgroundColor: "#4EC7E6",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
