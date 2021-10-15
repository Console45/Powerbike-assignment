import React, { FC, ReactElement } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { HomeHeader, Tabs } from "../layouts";
import { Colors, sizes } from "../theme";

interface HomeProps {}

export const Home: FC<HomeProps> = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <View style={styles.captionContainer}>
        <Text style={{ color: Colors.GRAY, fontSize: 17 }}>The World's </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontSize: 23,
            fontWeight: "bold",
            marginBottom: -1,
          }}
        >
          Best Bike
        </Text>
      </View>
      <Tabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  captionContainer: {
    flexDirection: "row",
    paddingHorizontal: sizes.mainPadding,
    marginTop: 20,
    alignItems: "flex-end",
  },
});
