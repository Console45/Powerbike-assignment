import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens, NativeStackParamList } from "./navigations";
import { Login } from "./screens";
import { Home } from "./screens/Home";
import { Cart } from "./screens/Cart";

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
          name={Screens.HOME}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Screens.CART}
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
