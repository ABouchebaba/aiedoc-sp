import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/actions";
import socketIOClient from "socket.io-client";
import { BACKEND_URL } from "react-native-dotenv";

const About = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    // http://192.168.43.19:4002/
    const socket = socketIOClient(BACKEND_URL);
    socket.on("message", (data) => {
      alert(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>About screen</Text>
      <Text>
        user : {user.name} with email: {user.email}
      </Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default About;
