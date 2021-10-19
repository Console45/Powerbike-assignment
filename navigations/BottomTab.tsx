import React, { FC, ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BottomTabParamList, Screens } from ".";
import { Cart, Home } from "../screens";
import { Colors } from "../theme";
import { Button } from "../components";

interface TabNavigatorProps {}
const Tab = createBottomTabNavigator<BottomTabParamList>();
const BottomTab: FC<TabNavigatorProps> = ({}): ReactElement => {
  const { tabBarStyle, actionBtnContainer, actionBtn } = styles;
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, tabBarStyle }}
      initialRouteName={Screens.HOME}
    >
      <Tab.Screen
        name={Screens.HOME}
        component={Home}
        options={{
          headerShadowVisible: false,
          headerTitle: () => (
            <MaterialIcons
              name="pedal-bike"
              size={35}
              color={Colors.DEEP_GRAY}
            />
          ),
          headerLeft: () => (
            <View style={{ marginLeft: 30 }}>
              <Ionicons
                name="menu-outline"
                size={24}
                color={Colors.DEEP_GRAY}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 30 }}>
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
          ),

          tabBarIcon: (props) =>
            props.focused ? (
              <MaterialCommunityIcons
                name="home"
                size={30}
                color={Colors.PRIMARY}
              />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={30}
                color={Colors.GRAY}
              />
            ),
        }}
      />
      <Tab.Screen
        name={Screens.RECORD}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (_) => (
            <View style={actionBtnContainer}>
              <Button style={actionBtn}>
                <MaterialCommunityIcons
                  name="microphone"
                  size={24}
                  color={Colors.WHITE}
                />
              </Button>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={Screens.CART}
        component={Cart}
        options={{
          tabBarIcon: (props) =>
            props.focused ? (
              <MaterialCommunityIcons
                name="cart"
                size={24}
                color={Colors.PRIMARY}
              />
            ) : (
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color={Colors.GRAY}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.SECONDARY,
  },
  actionBtnContainer: {
    backgroundColor: Colors.WHITE,
    width: 75,
    height: 75,
    top: -25,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtn: {
    backgroundColor: Colors.TERTIARY,
    borderRadius: 100,
    width: 55,
    height: 55,
  },
});
