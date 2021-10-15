import React, { FC, ReactElement } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList, Screens } from ".";
import { Cart, Shop } from "../screens";

interface TabNavigatorProps {}
const Tab = createBottomTabNavigator<BottomTabParamList>();
export const BottomTab: FC<TabNavigatorProps> = ({}): ReactElement => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.SHOP}
        component={Shop}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name={Screens.CART}
        component={Cart}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
