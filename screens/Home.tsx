import React, { FC, ReactElement } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { Colors } from "../theme";

interface HomeProps {}

export const Home: FC<HomeProps> = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
});
