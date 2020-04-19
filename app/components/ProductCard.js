import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export const ProductCard = (props) => {
  const product = {
    discount:0,
    _id: "5e8283076079920016fb9586",
    name: "Gél hydro",
    brand: "Venus",
    category: "Gel",
    price: 1000,
    options: [],
    rating: 3,
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("ProductProfile")}>
      <View style={styles.imageSide}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
      </View>
      <View style={styles.leftSide}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <View style={styles.ratingView}>
          {[...Array(product.rating)].map((x, i) => (
            <Entypo key={i} name="star" size={25} color="#FFD700"></Entypo>
          ))}
        </View>
      </View>
      <View style={styles.rightSide}>
        {product.discount === 0 ? 
        <Text style={styles.price}>{product.price} DA</Text>:<>
        <Text style={styles.priceOld}>{product.price} DA</Text>
        <Text style={styles.priceDiscount}>{product.price-product.price*(product.discount/100)} DA</Text></>
      }
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    flexDirection: "row",
    // borderWidth: 1,
    // backgroundColor:'yellow',
    width: "100%",
    borderBottomWidth:1,
    borderColor:"white",
  },
  imageSide: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    // height: "auto",
    resizeMode: "contain",
  },
  leftSide: {
    width: "45%",
    paddingHorizontal: 5,
    //backgroundColor: "blue",
  },
  rightSide: {
    width: "25%",
    // backgroundColor: "green",
  },
  ratingView: {
    flexDirection: "row",
  },
  text: {
    color: "black",
    fontSize: 18,
  },
  name: {
    color: "white",
    fontSize: 18,
  },
  brand: {
    color: "white",
    fontSize: 16,
    fontStyle: "italic",
  },
  price: {
    color: "white",
    fontSize: 18,
    fontWeight:"bold"
  },
  priceOld:{
    color: "gray",
    fontSize: 15,
    fontWeight:"bold",
    // fontStyle: "normal",
    textDecorationLine:"line-through",
    textDecorationColor:"red",
    textDecorationStyle:'dotted'
  },
  priceDiscount:{
    color: "gold",
    fontSize: 18,
    fontWeight:"bold",
    fontStyle: "normal",
    textDecorationLine:"underline",
    textDecorationColor:"red",
    textDecorationStyle:'dotted'
  },
  category: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
