import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const Searchtab = () => {
  const categories = [
    { title: "Emergency", icon: "alert-circle", color: "#FF6B6B" },
    { title: "Legal Aid", icon: "gavel", color: "#4ECDC4" },
    { title: "Education", icon: "book-outline", color: "#FFD93D" },
    { title: "Shelters", icon: "home-outline", color: "#6C5CE7" },
  ];

  const popularSchemes = [
    { name: "Nirbhaya Fund", img: require("../assets/images/nirbhaya.png") },
    { name: "One Stop Centre", img: require("../assets/images/OneStopCenter.png") },
    { name: "Ujjawala Scheme", img: require("../assets/images/Ujjwala.png") },
    { name: "Mahila Volunteers", img: require("../assets/images/mahila.png") },
  ];

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.subHeading}> Women Safety Schemes</Text>

      <View style={styles.searchBox}>
        <Icon name="search" size={20} color="#888" />
        <TextInput placeholder="Search safety schemes..." style={styles.input} />
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryContainer}>
        {categories.map((cat, index) => (
          <View key={index} style={[styles.categoryCard, { backgroundColor: cat.color }]}>
            <Icon name={cat.icon} size={24} color="#fff" />
            <Text style={styles.categoryText}>{cat.title}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Popular Schemes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
        {popularSchemes.map((scheme, index) => (
          <TouchableOpacity key={index} style={styles.schemeCard}>
            <Image source={scheme.img} style={styles.schemeImage} />
            <Text style={styles.schemeText}>{scheme.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Safety Tips</Text>
    <View style={styles.tipsBox}>
      <Text style={styles.tip}>• Always share your location when traveling late.</Text>
      <Text style={styles.tip}>• Use trusted apps with SOS features.</Text>
      <Text style={styles.tip}>• Memorize emergency helpline numbers (e.g., 112, 181 for women in India).</Text>
      <Text style={styles.tip}> • Download reliable safety apps like 112 India App.</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 16 },
  greeting: { fontSize: 22, fontWeight: "600" },
  subHeading: { fontSize: 16, color: "#777", marginBottom: 12 },
  searchBox: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  input: { marginLeft: 8, flex: 1 },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginTop: 20 },
  categoryContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  categoryCard: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  categoryText: { color: "#fff", marginTop: 5, fontWeight: "600" },
  schemeCard: {
    width: 140,
    height: 180,
    marginRight: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
    padding: 8,
    alignItems: "center",
  },
  schemeImage: { width: "100%", height: 130, borderRadius: 8, marginBottom: 6 },
  schemeText: { textAlign: "center", fontSize: 14, fontWeight: "500" },
  tipsBox: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  tip: {
    fontSize: 13,
    marginBottom: 5,
    color: "#333",
  },
  
});

export default Searchtab;
