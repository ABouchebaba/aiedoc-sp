import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Store/actions";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";
import { BackImage } from "../components/";

const AuthForm = (props) => {
  const dispatch = useDispatch();
  const { phoneNumber: phone } = props.route.params;
  // const phone = "+213555077412";
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const disabled = !(email && firstname && lastname && birthdate);
  const loading = useSelector((state) => state.user.loading);

  const submit = () => {
    // register user in backend
    console.log({ phone, email, firstname, lastname, birthdate });
    dispatch(register({ phone, email, firstname, lastname, birthdate }));
  };

  return (
    <BackImage source={require("../../assets/bg/bg1.png")}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <View style={styles.mainView}>
          <Text style={styles.title}>Formulaire d'inscription</Text>
          <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            autoCompleteType="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            style={styles.TextInput}
          />
          <TextInput
            placeholder="First Name"
            onChangeText={setFirstname}
            autoCompleteType="name"
            textContentType="givenName"
            style={styles.TextInput}
          />
          <TextInput
            placeholder="Last Name"
            onChangeText={setLastname}
            autoCompleteType="name"
            textContentType="familyName"
            style={styles.TextInput}
          />
          <DatePicker
            title="Birthdate"
            onChange={setBirthdate}
            value={birthdate}
            style={styles.TextInput}
          />
          <Button title="Register" onPress={submit} disabled={disabled} />
        </View>
      )}
    </BackImage>
  );
};

const styles = StyleSheet.create({
  mainView: { alignItems: "center" },
  title: { fontSize: 25, color: "white", marginBottom: 20 },
  TextInput: {
    backgroundColor: "#F2F2F2",
    width: "80%",
    borderRadius: 50,
    paddingLeft: 20,
    fontSize: 20,
    paddingVertical: 10,
    marginBottom: 40,
  },
});

export default AuthForm;
