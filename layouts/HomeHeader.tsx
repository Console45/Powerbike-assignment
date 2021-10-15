import React, { FC, ReactElement } from "react";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { Colors } from "../theme";

interface HomeHeaderProps {}

export const HomeHeader: FC<HomeHeaderProps> = ({}): ReactElement => {
  return (
    <View style={styles.container}>
      <Ionicons name="menu-outline" size={24} color={Colors.DEEP_GRAY} />
      <MaterialIcons name="pedal-bike" size={35} color={Colors.DEEP_GRAY} />
      <View style={{ flexDirection: "row" }}>
        <Feather
          name="search"
          style={{ marginRight: 10 }}
          size={24}
          color={Colors.DEEP_GRAY}
        />
        <Ionicons
          name="ios-notifications-outline"
          size={24}
          color={Colors.DEEP_GRAY}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 5,
    alignItems: "center",
  },
});
