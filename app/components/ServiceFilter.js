import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import { Checkbox } from "./Checkbox";
import Animated from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { timing } from "../helpers";

export const ServiceFilter = ({ style, setFilter, selected }) => {
  const { services, loading, error } = useSelector((state) => state.services);
  const [open, setopen] = useState(false);
  const [height] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));

  const openFilters = () => {
    timing(height, 250).start();
    timing(opacity, 1).start();
    setopen(true);
  };

  const closeFilters = () => {
    timing(height, 0).start();
    timing(opacity, 0).start();
    setopen(false);
  };

  const toggleFilters = () => {
    if (open) closeFilters();
    else openFilters();
  };

  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={toggleFilters}>
        <View style={styles.filterToggle}>
          <Image source={require("../../assets/line.png")} />
          <Text style={styles.toggleText}>Filtres</Text>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.content, { height }]}>
        <ScrollView>
          <Animated.View style={[styles.innerContent, { opacity }]}>
            {services.map((type) =>
              type.services.map((s) => (
                <Checkbox
                  key={s._id}
                  title={s.name}
                  selected={selected[s.name]}
                  onPress={() => setFilter("service", s.name)}
                />
              ))
            )}
          </Animated.View>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = {
  filterToggle: {
    padding: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderColor: "#c6c6c6",
    borderWidth: 1,
    alignItems: "center",
  },
  toggleText: {
    marginTop: 3,
    textAlign: "center",
    color: "#8edbef",
    fontSize: 24,
  },
  content: {
    width: "100%",
    backgroundColor: "white",
  },
  innerContent: {
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
};
