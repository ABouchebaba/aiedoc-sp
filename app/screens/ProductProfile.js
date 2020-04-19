import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { BackImage, MarketHeader, ProductCard } from "../components";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const ProductProfile = (props) => {
  return (
    <BackImage source={require("../../assets/bg/bgMarket.png")}>
      <View style={styles.header}>
        <MarketHeader navigation={props.navigation} />
      </View>
      <View style={styles.mainView}>
        <View style={styles.search}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollContain}
          >
            {[...Array(10)].map((x, i) => (
              <View style={{backgroundColor: "black",
              borderRadius: 20,padding:1, margin:3}} key={i}>
                <Image
                  source={require("../../assets/logo.png")}
                  style={styles.image}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.name}>Lorem ipsum</Text>
        <Text style={styles.brand}>Marque</Text>
      </View>
    </BackImage>
  );
};

export default ProductProfile;

const styles = StyleSheet.create({
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
  },
  mainView: {
    height: "85%",
    width: "100%",
    backgroundColor: "rgba(17, 160, 193, .7)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContain: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // borderRightWidth: 4,
    // backgroundColor: "green",
  },
  search: {
    height: 200,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 140,
    margin: 5,
    height: 140,
    resizeMode: "contain",
  },
  name:{
    fontSize:25,
    color:'white',
    marginHorizontal: 20,
  },
  brand:{
    fontSize:25,
    color:'white',
    marginHorizontal: 20,
  },
});
