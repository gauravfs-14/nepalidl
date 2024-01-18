import { Image, StyleSheet, FlatList } from "react-native";

import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

type SIgnCardProps = {
  image: string;
  title: string;
  id: number;
};

const RegSigns: SIgnCardProps[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nepal_road_sign_A1.svg/120px-Nepal_road_sign_A1.svg.png",
    title: "Stop and give way",
    id: 1,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Nepal_road_sign_A2.svg/120px-Nepal_road_sign_A2.svg.png",
    title: "Give way",
    id: 2,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nepal_road_sign_A3.svg/120px-Nepal_road_sign_A3.svg.png",
    title: "No Entry",
    id: 3,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Nepal_road_sign_A4.svg/120px-Nepal_road_sign_A4.svg.png",
    title: "No Motor vehicles",
    id: 4,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nepal_road_sign_A5.svg/120px-Nepal_road_sign_A5.svg.png",
    title: "No Trucks",
    id: 5,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nepal_road_sign_A6.svg/120px-Nepal_road_sign_A6.svg.png",
    title: "No handcarts",
    id: 6,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nepal_road_sign_A7.svg/120px-Nepal_road_sign_A7.svg.png",
    title: "No bullock carts",
    id: 7,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Nepal_road_sign_A8.svg/120px-Nepal_road_sign_A8.svg.png",
    title: "No pedestrians",
    id: 8,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nepal_road_sign_A9.svg/120px-Nepal_road_sign_A9.svg.png",
    title: "No vehicles over length shown",
    id: 9,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nepal_road_sign_A10.svg/120px-Nepal_road_sign_A10.svg.png",
    title: "No vehicles over height shown",
    id: 10,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Nepal_road_sign_A11.svg/120px-Nepal_road_sign_A11.svg.png",
    title: "No vehicles over width shown",
    id: 11,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nepal_road_sign_A12.svg/120px-Nepal_road_sign_A12.svg.png",
    title: "No vehicles over gross weight shown",
    id: 12,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nepal_road_sign_A13.svg/120px-Nepal_road_sign_A13.svg.png",
    title: "Axle weight limit",
    id: 13,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nepal_road_sign_A14.svg/120px-Nepal_road_sign_A14.svg.png",
    title: "No Parking",
    id: 14,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Nepal_road_sign_A15.svg/120px-Nepal_road_sign_A15.svg.png",
    title: "No stopping",
    id: 15,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nepal_road_sign_A16.svg/120px-Nepal_road_sign_A16.svg.png",
    title: "No overtaking",
    id: 16,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Nepal_road_sign_A17.svg/120px-Nepal_road_sign_A17.svg.png",
    title: "No passing without stopping",
    id: 17,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nepal_road_sign_A18.svg/120px-Nepal_road_sign_A18.svg.png",
    title: "No right turn",
    id: 18,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Nepal_road_sign_A19.svg/120px-Nepal_road_sign_A19.svg.png",
    title: "No left turn",
    id: 19,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Nepal_road_sign_A20.svg/120px-Nepal_road_sign_A20.svg.png",
    title: "No U turns",
    id: 20,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Nepal_road_sign_A21.svg/120px-Nepal_road_sign_A21.svg.png",
    title: "No use of horn",
    id: 21,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nepal_road_sign_A22-40.svg/120px-Nepal_road_sign_A22-40.svg.png",
    title: "Maximum speed",
    id: 22,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nepal_road_sign_A23-40.svg/120px-Nepal_road_sign_A23-40.svg.png",
    title: "End of speed limit",
    id: 23,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Nepal_road_sign_A24.svg/120px-Nepal_road_sign_A24.svg.png",
    title: "Temporary stop sign",
    id: 24,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nepal_road_sign_A25.svg/120px-Nepal_road_sign_A25.svg.png",
    title: "Temporary go sign",
    id: 25,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nepal_road_sign_A26.svg/120px-Nepal_road_sign_A26.svg.png",
    title: "Restriction ends",
    id: 26,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nepal_road_sign_A27.svg/120px-Nepal_road_sign_A27.svg.png",
    title: "Straight ahead only",
    id: 27,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nepal_road_sign_A28-L.svg/120px-Nepal_road_sign_A28-L.svg.png",
    title: "Turn left",
    id: 28,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Nepal_road_sign_A28-R.svg/120px-Nepal_road_sign_A28-R.svg.png",
    title: "Turn right",
    id: 29,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nepal_road_sign_A29-L.svg/120px-Nepal_road_sign_A29-L.svg.png",
    title: "Keep left",
    id: 30,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nepal_road_sign_A29-R.svg/120px-Nepal_road_sign_A29-R.svg.png",
    title: "Keep right",
    id: 31,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nepal_road_sign_A30-L.svg/120px-Nepal_road_sign_A30-L.svg.png",
    title: "Turn left ahead",
    id: 32,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nepal_road_sign_A30-R.svg/120px-Nepal_road_sign_A30-R.svg.png",
    title: "Turn right ahead",
    id: 33,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Nepal_road_sign_A31.svg/120px-Nepal_road_sign_A31.svg.png",
    title: "Mini roundabout",
    id: 34,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Nepal_road_sign_A32.svg/120px-Nepal_road_sign_A32.svg.png",
    title: "Pass either side",
    id: 35,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nepal_road_sign_A33.svg/80px-Nepal_road_sign_A33.svg.png",
    title: "One way traffic",
    id: 36,
  },
];

const WarnSigns: SIgnCardProps[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Nepal_road_sign_B3-L.svg/120px-Nepal_road_sign_B3-L.svg.png",
    title: "Side road on the left ahead",
    id: 37,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nepal_road_sign_B3-R.svg/120px-Nepal_road_sign_B3-R.svg.png",
    title: "Side road on the right ahead",
    id: 38,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Nepal_road_sign_B4-LR.svg/120px-Nepal_road_sign_B4-LR.svg.png",
    title: "Staggered junction ahead",
    id: 39,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Nepal_road_sign_B4-RL.svg/120px-Nepal_road_sign_B4-RL.svg.png",
    title: "Staggered junction ahead",
    id: 40,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Nepal_road_sign_B5.svg/120px-Nepal_road_sign_B5.svg.png",
    title: "T-junction ahead",
    id: 41,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Nepal_road_sign_B6.svg/120px-Nepal_road_sign_B6.svg.png",
    title: "Y-junction ahead",
    id: 42,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Nepal_road_sign_B7.svg/120px-Nepal_road_sign_B7.svg.png",
    title: "Traffic merges from left",
    id: 43,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Nepal_road_sign_B8.svg/120px-Nepal_road_sign_B8.svg.png",
    title: "Traffic merges from right",
    id: 44,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nepal_road_sign_B9.svg/120px-Nepal_road_sign_B9.svg.png",
    title: "Roundabout ahead",
    id: 45,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nepal_road_sign_B10-L.svg/120px-Nepal_road_sign_B10-L.svg.png",
    title: "Sharp bend to the left ahead",
    id: 46,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Nepal_road_sign_B10-R.svg/120px-Nepal_road_sign_B10-R.svg.png",
    title: "Sharp bend to the right ahead",
    id: 47,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Nepal_road_sign_B11-L.svg/120px-Nepal_road_sign_B11-L.svg.png",
    title: "Hairpin bend to the left ahead",
    id: 48,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nepal_road_sign_B11-R.svg/120px-Nepal_road_sign_B11-R.svg.png",
    title: "Hairpin bend to the right ahead",
    id: 49,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nepal_road_sign_B12-L.svg/120px-Nepal_road_sign_B12-L.svg.png",
    title: "Double bend ahead first to the left",
    id: 50,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Nepal_road_sign_B12-R.svg/120px-Nepal_road_sign_B12-R.svg.png",
    title: "Double bend ahead first to the right",
    id: 51,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Nepal_road_sign_B13-L1.svg/120px-Nepal_road_sign_B13-L1.svg.png",
    title: "Sharp bend to the left",
    id: 52,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nepal_road_sign_B13-R1.svg/120px-Nepal_road_sign_B13-R1.svg.png",
    title: "Sharp bend to the right",
    id: 53,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nepal_road_sign_B13-L3.svg/120px-Nepal_road_sign_B13-L3.svg.png",
    title: "Sharp bend to the left",
    id: 54,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Nepal_road_sign_B13-R3.svg/120px-Nepal_road_sign_B13-R3.svg.png",
    title: "Sharp bend to the right",
    id: 55,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nepal_road_sign_B14.svg/120px-Nepal_road_sign_B14.svg.png",
    title: "Road narrows on both sides",
    id: 56,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nepal_road_sign_B15-L.svg/120px-Nepal_road_sign_B15-L.svg.png",
    title: "Road narrows on left sides",
    id: 57,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nepal_road_sign_B15-R.svg/120px-Nepal_road_sign_B15-R.svg.png",
    title: "Road narrows on right sides",
    id: 58,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Nepal_road_sign_B16.svg/120px-Nepal_road_sign_B16.svg.png",
    title: "Dual carriageway ends ahead",
    id: 59,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nepal_road_sign_B17.svg/120px-Nepal_road_sign_B17.svg.png",
    title: "Traffic signals ahead",
    id: 60,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nepal_road_sign_B18.svg/120px-Nepal_road_sign_B18.svg.png",
    title: "Steep hill downwards",
    id: 61,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Nepal_road_sign_B19.svg/120px-Nepal_road_sign_B19.svg.png",
    title: "Steep hill upwards",
    id: 62,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Nepal_road_sign_B20.svg/120px-Nepal_road_sign_B20.svg.png",
    title: "Height limit ahead",
    id: 63,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nepal_road_sign_B21.svg/120px-Nepal_road_sign_B21.svg.png",
    title: "Two-way traffic straight ahead",
    id: 64,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nepal_road_sign_B22.svg/120px-Nepal_road_sign_B22.svg.png",
    title: "Two-way traffic crosses one way road",
    id: 65,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nepal_road_sign_B23.svg/120px-Nepal_road_sign_B23.svg.png",
    title: "Pedestrian crossing ahead",
    id: 66,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Nepal_road_sign_B24.svg/120px-Nepal_road_sign_B24.svg.png",
    title: "Pedestrians in road ahead",
    id: 67,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Nepal_road_sign_B25.svg/120px-Nepal_road_sign_B25.svg.png",
    title: "Children ahead",
    id: 68,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Nepal_road_sign_B26.svg/120px-Nepal_road_sign_B26.svg.png",
    title: "Cattle ahead",
    id: 69,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nepal_road_sign_B27.svg/120px-Nepal_road_sign_B27.svg.png",
    title: "Wild animals ahead",
    id: 70,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Nepal_road_sign_B28.svg/120px-Nepal_road_sign_B28.svg.png",
    title: "Unprotected quayside or riverbank ahead",
    id: 71,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Nepal_road_sign_B29.svg/120px-Nepal_road_sign_B29.svg.png",
    title: "Uneven road",
    id: 72,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Nepal_road_sign_B30.svg/120px-Nepal_road_sign_B30.svg.png",
    title: "Slippery road surface ahead",
    id: 73,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Nepal_road_sign_B31.svg/120px-Nepal_road_sign_B31.svg.png",
    title: "Road hump",
    id: 74,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Nepal_road_sign_B32.svg/120px-Nepal_road_sign_B32.svg.png",
    title: "Low-flying aircraft ahead",
    id: 75,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nepal_road_sign_B33-L.svg/120px-Nepal_road_sign_B33-L.svg.png",
    title: "Falling rocks",
    id: 76,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nepal_road_sign_B33-R.svg/120px-Nepal_road_sign_B33-R.svg.png",
    title: "Falling rocks",
    id: 77,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Nepal_road_sign_B34.svg/120px-Nepal_road_sign_B34.svg.png",
    title: "Dangerous dip",
    id: 78,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Nepal_road_sign_B35.svg/120px-Nepal_road_sign_B35.svg.png",
    title: "Narrow bridge ahead",
    id: 79,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nepal_road_sign_B36.svg/120px-Nepal_road_sign_B36.svg.png",
    title: "Other danger ahead",
    id: 80,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nepal_road_sign_B37.svg/120px-Nepal_road_sign_B37.svg.png",
    title: "Checkpoint ahead",
    id: 81,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Nepal_road_sign_B38.svg/120px-Nepal_road_sign_B38.svg.png",
    title: "Roadworks ahead",
    id: 82,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nepal_road_sign_B39.svg/120px-Nepal_road_sign_B39.svg.png",
    title: "Loose chippings",
    id: 83,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nepal_road_sign_B40.svg/120px-Nepal_road_sign_B40.svg.png",
    title: "Railway level crossing ahead without gate or barrier",
    id: 84,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Nepal_road_sign_B41.svg/120px-Nepal_road_sign_B41.svg.png",
    title: "Railway level crossing ahead with gate or barrier",
    id: 85,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nepal_road_sign_B42.svg/120px-Nepal_road_sign_B42.svg.png",
    title: "Diversion ahead",
    id: 86,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Nepal_road_sign_B43-L.svg/27px-Nepal_road_sign_B43-L.svg.png",
    title: "Dangerous obstruction (Verges)",
    id: 87,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Nepal_road_sign_B43-R.svg/27px-Nepal_road_sign_B43-R.svg.png",
    title: "Dangerous obstruction (verges)",
    id: 88,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nepal_road_sign_B44.svg/54px-Nepal_road_sign_B44.svg.png",
    title: "Dangerous obstruction (Central reservation)",
    id: 89,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Nepal_road_sign_B45.svg/120px-Nepal_road_sign_B45.svg.png",
    title: "T Junction",
    id: 90,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Nepal_road_sign_B46-L.svg/120px-Nepal_road_sign_B46-L.svg.png",
    title: "Sharp bend",
    id: 91,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Nepal_road_sign_B46-R.svg/120px-Nepal_road_sign_B46-R.svg.png",
    title: "Sharp bend",
    id: 92,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nepal_road_sign_B47-L.svg/120px-Nepal_road_sign_B47-L.svg.png",
    title: "Diversion",
    id: 93,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Nepal_road_sign_B47-R.svg/120px-Nepal_road_sign_B47-R.svg.png",
    title: "Diversion",
    id: 94,
  },
];

const InfoSigns: SIgnCardProps[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Nepal_road_sign_C1.svg/120px-Nepal_road_sign_C1.svg.png",
    title: "No through road",
    id: 95,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nepal_road_sign_C2.svg/120px-Nepal_road_sign_C2.svg.png",
    title: "Pedestrian crossing",
    id: 96,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nepal_road_sign_C3.svg/120px-Nepal_road_sign_C3.svg.png",
    title: "Parking place",
    id: 97,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Nepal_road_sign_C4.svg/93px-Nepal_road_sign_C4.svg.png",
    title: "Overtaking section",
    id: 98,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nepal_road_sign_C5.svg/104px-Nepal_road_sign_C5.svg.png",
    title: "Filling station",
    id: 99,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Nepal_road_sign_C6.svg/104px-Nepal_road_sign_C6.svg.png",
    title: "Breakdown service",
    id: 100,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nepal_road_sign_C7.svg/104px-Nepal_road_sign_C7.svg.png",
    title: "Telephone",
    id: 101,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Nepal_road_sign_C8.svg/104px-Nepal_road_sign_C8.svg.png",
    title: "Overnight accommodation",
    id: 102,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Nepal_road_sign_C9.svg/104px-Nepal_road_sign_C9.svg.png",
    title: "First-aid post",
    id: 103,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Nepal_road_sign_C10.svg/104px-Nepal_road_sign_C10.svg.png",
    title: "Hospital",
    id: 104,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Nepal_road_sign_C11.svg/104px-Nepal_road_sign_C11.svg.png",
    title: "Refreshments",
    id: 105,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Nepal_road_sign_C12.svg/104px-Nepal_road_sign_C12.svg.png",
    title: "Restaurant",
    id: 106,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Nepal_road_sign_C13.svg/104px-Nepal_road_sign_C13.svg.png",
    title: "Picnic Site",
    id: 107,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Nepal_road_sign_C14-L.svg/80px-Nepal_road_sign_C14-L.svg.png",
    title: "Recommended route for pedestrians and cyclists",
    id: 108,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nepal_road_sign_C15-L.svg/81px-Nepal_road_sign_C15-L.svg.png",
    title: "Recommended route for pedestrians",
    id: 109,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Nepal_road_sign_C16-L.svg/106px-Nepal_road_sign_C16-L.svg.png",
    title: "Recommended route for cyclists",
    id: 110,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Nepal_road_sign_C17.svg/120px-Nepal_road_sign_C17.svg.png",
    title: "Bus Stop",
    id: 111,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Nepal_road_sign_C18.svg/120px-Nepal_road_sign_C18.svg.png",
    title: "Taxi Rank",
    id: 112,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nepal_road_sign_C19-L.svg/120px-Nepal_road_sign_C19-L.svg.png",
    title: "One way traffic",
    id: 113,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Nepal_road_sign_C19-R.svg/120px-Nepal_road_sign_C19-R.svg.png",
    title: "One way traffic",
    id: 114,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Nepal_road_sign_C20.svg/120px-Nepal_road_sign_C20.svg.png",
    title: "Beginning of City Limit",
    id: 115,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Nepal_road_sign_C21.svg/120px-Nepal_road_sign_C21.svg.png",
    title: "End of City Limit",
    id: 116,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Nepal_road_sign_C22.svg/120px-Nepal_road_sign_C22.svg.png",
    title: "Advance directional for roundabouts (main roads)",
    id: 117,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Nepal_road_sign_C23.svg/120px-Nepal_road_sign_C23.svg.png",
    title: "Reassurance directional (main roads)",
    id: 118,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Nepal_road_sign_C24.svg/120px-Nepal_road_sign_C24.svg.png",
    title: "Advance directional (main roads)",
    id: 119,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nepal_road_sign_C25.svg/120px-Nepal_road_sign_C25.svg.png",
    title: "Intersection directional (main roads)",
    id: 120,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Nepal_road_sign_C26.svg/120px-Nepal_road_sign_C26.svg.png",
    title: "Intersection directional (temporary)",
    id: 121,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nepal_road_sign_C27.svg/120px-Nepal_road_sign_C27.svg.png",
    title: "Intersection directional",
    id: 122,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nepal_road_sign_C28.svg/120px-Nepal_road_sign_C28.svg.png",
    title: "Advance directional",
    id: 123,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nepal_road_sign_C29.svg/120px-Nepal_road_sign_C29.svg.png",
    title: "Bridge name",
    id: 124,
  },
];

const AddSigns: SIgnCardProps[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nepal_road_sign_D1.svg/120px-Nepal_road_sign_D1.svg.png",
    title: "Distance warning",
    id: 125,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Nepal_road_sign_D12.svg/120px-Nepal_road_sign_D12.svg.png",
    title: "Ice",
    id: 126,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nepal_road_sign_D17.svg/120px-Nepal_road_sign_D17.svg.png",
    title: "Cars",
    id: 127,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nepal_road_sign_D18.svg/120px-Nepal_road_sign_D18.svg.png",
    title: "Trucks",
    id: 128,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nepal_road_sign_D19.svg/120px-Nepal_road_sign_D19.svg.png",
    title: "Buses",
    id: 129,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Nepal_road_sign_D25.svg/120px-Nepal_road_sign_D25.svg.png",
    title: "End",
    id: 130,
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Nepal_road_sign_D26.svg/120px-Nepal_road_sign_D26.svg.png",
    title: "End of Restriction",
    id: 131,
  },
];

export default function TabOneScreen() {
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
