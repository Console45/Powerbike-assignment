import React, { FC, ReactElement } from "react";
import { Login } from "../screens";
import BottomTab from "./BottomTab";
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
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
