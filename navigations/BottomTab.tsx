import React, { FC, ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomTabParamList, Screens } from ".";
import { Cart, Shop } from "../screens";
import { Colors } from "../theme";
import { Button } from "../components";

interface TabNavigatorProps {}
const Tab = createBottomTabNavigator<BottomTabParamList>();
export const BottomTab: FC<TabNavigatorProps> = ({}): ReactElement => {
  const { tabBarStyle, actionBtnContainer, actionBtn } = styles;
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, tabBarStyle }}
      initialRouteName={Screens.SHOP}
    >
      <Tab.Screen
        name={Screens.SHOP}
        component={Shop}
        options={{
          headerShown: false,
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
        component={Shop}
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

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.SECONDARY,
  },
  actionBtnContainer: {
    backgroundColor: Colors.WHITE,
    width: 80,
    height: 80,
    top: -30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtn: {
    backgroundColor: Colors.TERTIARY,
    borderRadius: 100,
    width: 60,
    height: 60,
  },
});
