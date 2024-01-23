import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { A } from '@expo/html-elements';

export default function MoreScreen() {
  return (
    <>
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
              <Text style={styles.title}>NepaliDL - About</Text>
            </LinearGradient>
          </View>
          <View style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.cardHeading}>
                ComputeNepal (Apps By CN)
              </Text>
              <Text>
                Founded in 2021 AD, ComputeNepal has come a long way from its beginnings in Nepal. When we first started out, our passion for technological advancement in the country drove us to start our own initiative.
              </Text>
              <Text>
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please do not hesitate to contact us.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardHeading}>
                Contact ComputeNepal
              </Text>
              <Text style={{ textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                <A href="https://computenepal.com">ComputeNepal</A>
              </Text>
              <Text style={{ textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                <A href="https://github.com/computenepal">GitHub</A>
              </Text>
              <Text style={{ textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                <A href="https://facebook.com/computenepal">Facebook</A>
              </Text>
              <Text style={{ textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                <A href="https://www.facebook.com/groups/computenepal">Community</A>
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardHeading}>
                Contact Developer
              </Text>
              <Text style={{ textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                <A href="https://gaurabchhetri.com..">Dev Portfolio</A>
              </Text>
              <Text style={{ textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                <A href="https://github.com/gauravfs-14">GitHub</A>
              </Text>
              <Text style={{ textDecorationStyle: "solid", textDecorationLine: "underline" }}>
                <A href="https://linkedin.com/in/gaurabchhetri">LinkedIn</A>
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardHeading}>
                About This App
              </Text>
              <Text>
                NepaliDL is an open-source application for the DL written exam in Nepal. It also features different sections which will help in the process of obtaining a driving license in Nepal.
              </Text>
              <Text>
                Disclaimer: We don't represent a government entity. This app only gives you information about the written exam of DL in Nepal along with the questions and other general information available to the public compiled in one place.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
  image: {
    flex: 1,
    width: 200,
    height: 100,
    resizeMode: "contain",
  },
  content: {
    margin: 10,
    gap: 10,
  },
  card: {
    backgroundColor: "rgba(220, 20, 60, 1)",
    borderRadius: 20,
    padding: 10,
    gap: 10
  },
  heading2: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  cardHeading: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  }
});
