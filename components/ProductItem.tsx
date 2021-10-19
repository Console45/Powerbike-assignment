import React, { FC, ReactElement } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../theme";
import { Product } from "../utils";

interface ProductProps {
  product: Product;
}

export const ProductItem: FC<ProductProps> = ({ product }): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SECONDARY,
    height: 220,
    width: "47%",
    borderRadius: 20,
  },
});
