import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Modal, Image, Text, TouchableOpacity } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { Header, Interventions, Purchaces, InterventionModel } from "../components";
import { FontAwesome, Entypo } from "@expo/vector-icons";

// const initialLayout = { width: Dimensions.get('window').width };

const History = (props) => {
  const dispatch = useDispatch();
  const { interventions } = useSelector((state) => state.user.user);

  //console.log(interventions);
  // props.navigation.openDrawer();
  const [intervention, setIntervention] = useState(false);
  const [purchace, setPurchace] = useState(false);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "préstations" },
    { key: "second", title: "achats" },
  ]);

  function interventionModel (){
    setIntervention(!intervention)
  }

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <Interventions interventions={interventions} model={interventionModel} />;
      case "second":
        return <Purchaces />;
      default:
        return null;
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/bg/bgHome.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Entypo name="menu" size={70} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <TabView
          lazy={true}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ borderColor: "#1FB8E0", borderBottomWidth: 3 }}
              style={styles.tabView}
              activeColor={"#D61F2C"}
              inactiveColor={"#48C2E3"}
              pressColor={"#D61F2C"}
            />
          )}
        />
        <InterventionModel  close={interventionModel} showModel={intervention} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    paddingLeft:30,
  },
  mainView: {
    height: "85%",
    width: "100%",
  },
  tabView: {
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  scene: {
    flex: 1,
  },
  modelCard:{
    ...StyleSheet.absoluteFillObject,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba( 250, 250, 250, 0.5 )',
  },
  modelInfo:{
    backgroundColor:'#4EC7E6',
    width:'70%',
    height:"50%",
    justifyContent:'space-evenly',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  image:{
    width:'auto',
    height:70,
    resizeMode:'contain',
  },
  modelText:{
    alignSelf:'center',
    fontSize:20 
  },
});

export default History;
