import React, { FC, ReactElement } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { Tabs, Header } from "../layouts";
import { Colors, sizes } from "../theme";

interface ShopProps {}

export const Shop: FC<ShopProps> = ({}): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
      {/* <View style={styles.actionButtonContainer}></View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  captionContainer: {
    flexDirection: "row",
    paddingHorizontal: sizes.mainPadding,
    marginTop: 20,
    alignItems: "flex-end",
  },
  //   actionButtonContainer: {
  //     backgroundColor: Colors.BLACK,
  //     height: 80,
  //     width: 80,
  //     borderRadius: 100,
  //     position: "absolute",
  //     bottom: 0,
  //     left: "50%",
  //     marginBottom
  //   },
});
