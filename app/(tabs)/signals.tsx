import { Image, Pressable, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

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
            <Text style={styles.title}>NepaliDL - Traffic Signals</Text>
          </LinearGradient>
        </View>
        <Text style={styles.title2}>Regulatory Signs</Text>
        <View style={styles.content}>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nepal_road_sign_A1.svg/120px-Nepal_road_sign_A1.svg.png",
              }}
            />
            <Text>Stop and give way</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Nepal_road_sign_A2.svg/120px-Nepal_road_sign_A2.svg.png",
              }}
            />
            <Text>Give way</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nepal_road_sign_A3.svg/120px-Nepal_road_sign_A3.svg.png",
              }}
            />
            <Text>No Entry</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Nepal_road_sign_A4.svg/120px-Nepal_road_sign_A4.svg.png",
              }}
            />
            <Text>No Motor vehicles</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nepal_road_sign_A5.svg/120px-Nepal_road_sign_A5.svg.png",
              }}
            />
            <Text>No Trucks</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nepal_road_sign_A6.svg/120px-Nepal_road_sign_A6.svg.png",
              }}
            />
            <Text>No handcarts</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nepal_road_sign_A7.svg/120px-Nepal_road_sign_A7.svg.png",
              }}
            />
            <Text>No bullock carts</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Nepal_road_sign_A8.svg/120px-Nepal_road_sign_A8.svg.png",
              }}
            />
            <Text>No pedestrians</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nepal_road_sign_A9.svg/120px-Nepal_road_sign_A9.svg.png",
              }}
            />
            <Text>No vehicles over length shown</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nepal_road_sign_A10.svg/120px-Nepal_road_sign_A10.svg.png",
              }}
            />
            <Text>No vehicles over height shown</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Nepal_road_sign_A11.svg/120px-Nepal_road_sign_A11.svg.png",
              }}
            />
            <Text>No vehicles over width shown</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nepal_road_sign_A12.svg/120px-Nepal_road_sign_A12.svg.png",
              }}
            />
            <Text>No vehicles over gross weight shown</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nepal_road_sign_A13.svg/120px-Nepal_road_sign_A13.svg.png",
              }}
            />
            <Text>Axle weight limit</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nepal_road_sign_A14.svg/120px-Nepal_road_sign_A14.svg.png",
              }}
            />
            <Text>No Parking</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nepal_road_sign_A15.svg/120px-Nepal_road_sign_A15.svg.png",
              }}
            />
            <Text>No stopping</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nepal_road_sign_A16.svg/120px-Nepal_road_sign_A16.svg.png",
              }}
            />
            <Text>No overtaking</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Nepal_road_sign_A17.svg/120px-Nepal_road_sign_A17.svg.png",
              }}
            />
            <Text>No passing without stopping</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nepal_road_sign_A18.svg/120px-Nepal_road_sign_A18.svg.png",
              }}
            />
            <Text>No right turn</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Nepal_road_sign_A19.svg/120px-Nepal_road_sign_A19.svg.png",
              }}
            />
            <Text>No left turn</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Nepal_road_sign_A20.svg/120px-Nepal_road_sign_A20.svg.png",
              }}
            />
            <Text>No U turns</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Nepal_road_sign_A21.svg/120px-Nepal_road_sign_A21.svg.png",
              }}
            />
            <Text>No use of horn</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nepal_road_sign_A22-40.svg/120px-Nepal_road_sign_A22-40.svg.png",
              }}
            />
            <Text>Maximum speed</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nepal_road_sign_A23-40.svg/120px-Nepal_road_sign_A23-40.svg.png",
              }}
            />
            <Text>End of speed limit</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Nepal_road_sign_A24.svg/120px-Nepal_road_sign_A24.svg.png",
              }}
            />
            <Text>Temporary stop sign</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nepal_road_sign_A25.svg/120px-Nepal_road_sign_A25.svg.png",
              }}
            />
            <Text>Temporary go sign</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nepal_road_sign_A26.svg/120px-Nepal_road_sign_A26.svg.png",
              }}
            />
            <Text>Restriction ends</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nepal_road_sign_A27.svg/120px-Nepal_road_sign_A27.svg.png",
              }}
            />
            <Text>Straight ahead only</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nepal_road_sign_A28-L.svg/120px-Nepal_road_sign_A28-L.svg.png",
              }}
            />
            <Text>Turn left</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Nepal_road_sign_A28-R.svg/120px-Nepal_road_sign_A28-R.svg.png",
              }}
            />
            <Text>Turn right</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nepal_road_sign_A29-L.svg/120px-Nepal_road_sign_A29-L.svg.png",
              }}
            />
            <Text>Keep left</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nepal_road_sign_A29-R.svg/120px-Nepal_road_sign_A29-R.svg.png",
              }}
            />
            <Text>Keep right</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nepal_road_sign_A30-L.svg/120px-Nepal_road_sign_A30-L.svg.png",
              }}
            />
            <Text>Turn left ahead</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nepal_road_sign_A30-R.svg/120px-Nepal_road_sign_A30-R.svg.png",
              }}
            />
            <Text>Turn right ahead</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nepal_road_sign_A31.svg/120px-Nepal_road_sign_A31.svg.png",
              }}
            />
            <Text>Mini roundabout</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Nepal_road_sign_A32.svg/120px-Nepal_road_sign_A32.svg.png",
              }}
            />
            <Text>Pass either side</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nepal_road_sign_A33.svg/80px-Nepal_road_sign_A33.svg.png",
              }}
            />
            <Text>One way traffic</Text>
          </View>
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
    gap: 20,
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "auto",
    flexDirection: "row",
    flex: 1,
  },
  card: {
    width: "40%",
    alignItems: "center",
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
