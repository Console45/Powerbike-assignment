import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackParamList, Screens } from "./navigations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./screens";
import { BottomTab } from "./navigations/BottomTab";

const Stack = createNativeStackNavigator<NativeStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
