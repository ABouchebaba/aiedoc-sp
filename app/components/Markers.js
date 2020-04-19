import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Marker, Callout } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { SpInfo } from "./SpInfo";

export const Markers = ({ location, sps, setvalidateEnabled }) => {
  const dispatch = useDispatch();

  const malePin = require("../../assets/malePin.png");
  const femalePin = require("../../assets/femalePin.png");

  useEffect(() => {
    // dispatch(getAvailableSps());
    // console.log(sps);
  }, []);

  return (
    <React.Fragment>
      <Marker.Animated
        onPress={() => setvalidateEnabled(false)}
        key={"user"}
        title="User"
        identifier={"user"}
        coordinate={location}
        //image={require("../../assets/malePin.png")}
      />
      {sps.map((sp) => {
        const pin = sp.sex === "male" ? malePin : femalePin;
        return (
          <Marker.Animated
            onPress={() => setvalidateEnabled(true)}
            key={sp._id}
            title={sp.sex}
            identifier={sp._id}
            coordinate={{
              longitude: sp.location.coordinates[0],
              latitude: sp.location.coordinates[1],
            }}
            image={pin}
          >
            <Callout style={{ position: "absolute" }}>
              <SpInfo sp={sp} />
            </Callout>
          </Marker.Animated>
        );
      })}
    </React.Fragment>
  );
};
