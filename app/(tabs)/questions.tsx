import { Image, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function TabOneScreen() {
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
            <Text style={styles.title}>NepaliDL - Likhit Questions</Text>
          </LinearGradient>
        </View>
        <View style={styles.content}>
          <Text style={styles.title2}>Likhit Questions for A/ K</Text>
          <Link href={"/questions/linkhitAK/"}>
            <LinearGradient
              // Background Linear Gradient
              colors={["rgba(0, 20, 60, 0.28)", "transparent"]}
              style={styles.card}
            >
              <Text style={styles.cardHeading}>Click Here</Text>
            </LinearGradient>
          </Link>
          <Text style={styles.title2}>Likhit Questions for B</Text>
          <Link href={"/questions/likhitB/"}>
            <LinearGradient
              // Background Linear Gradient
              colors={["rgba(0, 20, 60, 0.28)", "transparent"]}
              style={styles.card}
            >
              <Text style={styles.cardHeading}>Click Here</Text>
            </LinearGradient>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20,
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
    gap: 10,
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(220, 20, 60, 1)",
    borderRadius: 20,
    padding: 20,
  },
  cardHeading: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  image: {
    flex: 1,
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
});
