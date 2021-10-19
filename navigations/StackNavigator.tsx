import React, { FC, ReactElement } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { Login } from "../screens";
import BottomTab from "./BottomTab";
import { Colors } from "../theme";
import { NativeStackParamList, Screens } from "../navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface StackNavigatorProps {}
const Stack = createNativeStackNavigator<NativeStackParamList>();

export const StackNavigator: FC<StackNavigatorProps> = ({}): ReactElement => {
  return (
    <Stack.Navigator initialRouteName={Screens.LOGIN}>
      <Stack.Screen
        name={Screens.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.TAB}
        component={BottomTab}
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
            <View style={{ marginLeft: 15 }}>
              <Ionicons
                name="menu-outline"
                size={24}
                color={Colors.DEEP_GRAY}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", marginRight: 18 }}>
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
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
