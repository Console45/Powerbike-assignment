import React, { FC, ReactElement } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Colors, Sizes } from "../theme";

interface TabsProps {}

export const Tabs: FC<TabsProps> = ({}): ReactElement => {
  const categories: string[] = ["All", "Road bike", "Mountain", "Urban bike"];
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>Categories</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ width: "100%", marginTop: 15 }}
      >
        {categories.map((category: string, index: number) => {
          return <TabItem title={category} index={index} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

interface TabItemProps {
  title: string;
  index?: number;
}
const TabItem: FC<TabItemProps> = ({ title, index }): ReactElement => {
  const active = index === 0 ? styles.active : styles.text;
  return (
    <View style={styles.tabItem}>
      <Text style={active}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: Sizes.MAIN_PADDING,
    marginTop: 23,
  },
  tabItem: {
    backgroundColor: Colors.SECONDARY,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    flexDirection: "row",
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  text: { color: Colors.GRAY, fontWeight: "500" },
  active: { color: Colors.PRIMARY, fontWeight: "700" },
});
