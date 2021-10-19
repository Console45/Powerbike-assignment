import React, { FC, ReactElement } from "react";
import { View, StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import { ProductItem } from "../components";
import { Tabs, Header } from "../layouts";
import { Colors, Sizes } from "../theme";
import { products } from "../utils";

interface HomeProps {}

export const Home: FC<HomeProps> = (): ReactElement => {
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
      <View style={styles.productListContainer}>
        <FlatList
          keyExtractor={(item) => `${item.id}`}
          data={products}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          style={styles.productList}
          renderItem={({ item }) => (
            <ProductItem key={item.id} product={item} />
          )}
        />
      </View>
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
    paddingHorizontal: Sizes.MAIN_PADDING,
    marginTop: 20,
    alignItems: "flex-end",
  },
  productListContainer: {
    height: "68%",
  },
  productList: {
    marginHorizontal: Sizes.MAIN_PADDING,
    marginTop: 25,
  },
});
