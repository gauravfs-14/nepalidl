import { Image, StyleSheet, FlatList } from "react-native";

import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import {
  AddSigns,
  InfoSigns,
  RegSigns,
  SIgnCardProps,
  WarnSigns,
} from "../../constants/TrafficSignalsData";

export default function SignalsScreen() {
  const renderItem = ({ item }: { item: SIgnCardProps }) => (
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(1,4,0.2,0.6)", "transparent"]}
            style={styles.header}
          >
            <Image
              style={styles.image}
              source={require("../../assets/images/flag.png")}
            />
            <Text style={{ color: "white" }}>नेपाल सरकार</Text>
            <Text style={{ color: "white" }}>
              भौतिक पूर्वाधार तथा यातायात मन्त्रालय
            </Text>
            <Text style={{ color: "white" }}>यातायात व्यवस्था विभाग</Text>
            <Text style={styles.title}>NepaliDL - Traffic Signals</Text>
          </LinearGradient>
        </View>
        <View style={styles.content}>
          <Text style={styles.title2}>Regulatory Signs</Text>

          <FlatList
            data={RegSigns}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            columnWrapperStyle={{ justifyContent: "center", gap: 10 }}
            contentContainerStyle={{ gap: 10 }}
          />

          <Text style={styles.title2}>Warning Signs</Text>
          <FlatList
            data={WarnSigns}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            columnWrapperStyle={{ justifyContent: "center", gap: 10 }}
            contentContainerStyle={{ gap: 10 }}
          />

          <Text style={styles.title2}>Informational Signs</Text>
          <FlatList
            data={InfoSigns}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            columnWrapperStyle={{ justifyContent: "center", gap: 10 }}
            contentContainerStyle={{ gap: 10 }}
          />

          <Text style={styles.title2}>Additional Signs</Text>
          <FlatList
            data={AddSigns}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            columnWrapperStyle={{ justifyContent: "center", gap: 10 }}
            contentContainerStyle={{ gap: 10 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 20,
    color: "white",
  },
  title2: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  header: {
    paddingBottom: 50,
    paddingTop: 30,
    backgroundColor: "#df243e",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 10,
  },
  content: {
    margin: 10,
  },
  card: {
    width: "45%",
    alignItems: "center",
    // margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  cardHeading: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    width: "50%",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
