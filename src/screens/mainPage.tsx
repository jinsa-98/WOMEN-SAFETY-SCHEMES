import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView,
  Image,} from "react-native";
  import { useNavigation } from "@react-navigation/native"; 
// import ChatBot from "./chatbot";

const schemes = [
    { name: "Mission Shakti", color: "#A084E8", url: "https://missionshakti.wcd.gov.in/" },
    { name: "Women Helpline", color: "#FF6B6B", url: "https://www.ncw.nic.in/helplines" },
    { name: "Women Safety Division", color: "#FFD93D", url: "https://mha.gov.in/en/women-safety-division" },
    { name: "Swadhar Greh Scheme", color: "#6BCB77", url: "https://wcd.nic.in/schemes/swadhar-greh" },
    { name: "Ujjawala Scheme", color: "#4D96FF", url: "https://wcd.nic.in/schemes/ujjawala" },
    { name: "Working Women Hostel", color: "#FF884B", url: "https://wcd.nic.in/schemes/working-women-hostel" },
    { name: "Mahila Shakti Kendra", color: "#98b3a5", url: "https://wcd.nic.in/schemes/mahila-shakti-kendra" },
    { name: "Standup India", color: "#ebd09b", url: "https://www.standupmitra.in/" },
    { name: "Women Entrepreneurship Platform", color: "#ebd09b", url: "https://wep.gov.in/" },
    { name: "Udyogini", color: "#f280f0", url: "https://udyamimitra.in/" },
];

const openURL = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Error opening link:", err));
  };
  


const MainPage = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Women's Safety Schemes</Text>
        <View style={styles.backgroundCard}>
        <View style={styles.grid}>
          {schemes.map((scheme, index) => (
            <TouchableOpacity
             key={index} 
             onPress={() => openURL(scheme.url)} activeOpacity={0.7}
             >
              <View style={[styles.card, { backgroundColor: scheme.color }]}>
                <Text style={styles.cardText}>{scheme.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        </View>
         <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("ChatBot")} 
      >
        <Image
          source={require("../assets/images/cartoon.png")} 
          style={styles.chatIcon}
        />
      </TouchableOpacity>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  backgroundCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  card: {
    width: 140,
    height: 100,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 5,
  },
  chatButton: {
    position: "absolute",
    bottom: 65,
    right: 20,
    backgroundColor: "#A084E8",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  chatIcon: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
});

export default MainPage;
