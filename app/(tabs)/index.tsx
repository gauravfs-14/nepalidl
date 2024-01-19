import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { UL, LI } from "@expo/html-elements";

export default function HomeScreen() {
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
              <Text style={styles.title}>NepaliDL - Likhit Guide</Text>
            </LinearGradient>
          </View>
          <View style={styles.content}>
            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={["rgba(0, 20, 60, 0.28)", "transparent"]}
                style={styles.card}
              >
                <Text style={styles.cardHeading}>Know your category</Text>
                <UL>
                  <LI style={{ color: "white" }}>
                    A - Motorcycle, Scooter, Moped
                  </LI>
                  <LI style={{ color: "white" }}>
                    B - Car, Jeep, Delivery Van
                  </LI>
                  <LI style={{ color: "white" }}>C - Tempo, Auto Rickshaw</LI>
                  <LI style={{ color: "white" }}>C1 - E-Rickshaw</LI>
                  <LI style={{ color: "white" }}>D - Power Tiller</LI>
                  <LI style={{ color: "white" }}>E - Tractor</LI>
                  <LI style={{ color: "white" }}>F - minibus, Minitruck</LI>
                  <LI style={{ color: "white" }}>G - Truck, Bus, Lorry</LI>
                  <LI style={{ color: "white" }}>H - Road Roller, Dozer</LI>
                  <LI style={{ color: "white" }}>
                    I - Crane, Fire Brigade, Loader
                  </LI>
                  <LI style={{ color: "white" }}>K - Scooter, Moped</LI>
                </UL>
              </LinearGradient>
            </View>
            <View>
              <LinearGradient
                // Background Linear Gradient
                colors={["rgba(0, 20, 60, 0.28)", "transparent"]}
                style={styles.card}
              >
                <Text style={styles.cardHeading}>Information</Text>
                <UL>
                  <LI style={{ color: "white" }}>
                    1. For A/K categories, applicant's age should be 16+.
                  </LI>
                  <LI style={{ color: "white" }}>
                    2. For B category, applicant's age should be 18+.
                  </LI>
                  <LI style={{ color: "white" }}>
                    3. Anyone with color blindness is not eligible for driving
                    license.
                  </LI>
                </UL>
              </LinearGradient>
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
  },
  cardHeading: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
});
