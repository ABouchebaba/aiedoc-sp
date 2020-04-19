import React from "react";
import { store, persistor } from "./app/Store";
import { Provider } from "react-redux";
import Navigator from "./app/navigation";
import { AppLoading } from "expo";
import { PersistGate } from "redux-persist/integration/react";
import * as firebase from "firebase/app";
import { enableScreens } from "react-native-screens";
enableScreens(); // for performance optimization

// to be put in env or some config file
const firebaseConfig = {
  apiKey: "AIzaSyCAopAg2T797E76O4baQ0Kmto_QDZ2whIA",
  authDomain: "aiedoc-test.firebaseapp.com",
  databaseURL: "https://aiedoc-test.firebaseio.com",
  projectId: "aiedoc-test",
  storageBucket: "aiedoc-test.appspot.com",
  messagingSenderId: "1055588730579",
  appId: "1:1055588730579:web:81ee78e07be0a9746ef626",
  measurementId: "G-F9VYG9D4B6",
};
export default class App extends React.Component {
  state = {
    isReady: false,
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error");
    console.log(error);
  }

  async load() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    return;
  }

  render = () => {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.load}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  };
}
