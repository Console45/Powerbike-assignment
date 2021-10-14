import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, ReactElement } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { Button } from "../components";
import { NativeStackParamList, Screens } from "../navigations";
import { Colors } from "../theme";

interface LoginProps
  extends NativeStackScreenProps<NativeStackParamList, Screens.LOGIN> {}

export const Login: FC<LoginProps> = ({ navigation }): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/main-bike.jpg")}
        />
      </View>
      <View style={{ marginTop: 80 }}>
        <Text style={styles.headerText}>Welcome to</Text>
        <Text style={styles.title}>Power Bike Shop</Text>
      </View>
      <Button
        onPress={() => navigation.navigate(Screens.HOME)}
        style={styles.btnSecondary}
      >
        <Text style={{ color: Colors.BLACK, fontWeight: "500" }}>
          Login with Gmail
        </Text>
      </Button>
      <Button
        style={styles.btnTertiary}
        onPress={() => navigation.navigate(Screens.HOME)}
      >
        <Text style={{ color: Colors.WHITE, fontWeight: "500" }}>
          Login with Apple
        </Text>
      </Button>
      <View style={styles.signUp}>
        <Text style={{ color: Colors.GRAY }}>Not a member?</Text>
        <Text style={{ fontWeight: "bold", color: Colors.PRIMARY }}>
          {" "}
          Sign up
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerText: {
    fontSize: 29,
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  image: {
    width: 230,
    borderRadius: 25,
    height: 230,
    transform: [{ rotate: "315deg" }],
  },
  btnSecondary: {
    marginHorizontal: 40,
    backgroundColor: Colors.SECONDARY,
    marginTop: 25,
  },
  btnTertiary: {
    marginHorizontal: 40,
    backgroundColor: Colors.TERTIARY,
    marginTop: 15,
  },
  signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
});
