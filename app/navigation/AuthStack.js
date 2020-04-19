import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPhone from "../screens/AuthPhone";
import AuthPin from "../screens/AuthPin";
import AuthForm from "../screens/AuthForm";

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator headerMode={false}>
      <AuthStack.Screen name="AuthPhone" component={AuthPhone} />
      <AuthStack.Screen name="AuthPin" component={AuthPin} />
      <AuthStack.Screen name="AuthForm" component={AuthForm} />
    </AuthStack.Navigator>
  );
}

export default AuthStackScreen;
