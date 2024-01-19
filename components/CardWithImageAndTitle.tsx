import { Image, StyleSheet, Text } from "react-native";
import { View } from "./Themed";

export type CardWithImageAndTitleProps = {
  image: string;
  title: string;
  id: number;
};

export const renderCardWithImageAndTitle = ({
  item,
}: {
  item: CardWithImageAndTitleProps;
}) => (
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={{
        uri: `${item.image}`,
      }}
    />
    <Text style={{ color: "black", textAlign: "center", width: "80%" }}>
      {item.title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: "45%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
