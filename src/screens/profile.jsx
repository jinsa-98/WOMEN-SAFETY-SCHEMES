import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; 

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Ionicons name="arrow-back" size={24} color="white" style={styles.backIcon} /> */}
        <Text style={styles.profileName}>User</Text>
        <View style={styles.profileImageContainer}>
          {/* <Image
            source={require("./assets/profile-placeholder.png")} 
            style={styles.profileImage}
          /> */}
        </View>
      </View>

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        {renderDetail("person-outline", "User")}
        {renderDetail("calendar-outline", "Birthday")}
        {renderDetail("call-outline", "818 123 4567")}
        {/* {renderDetail("logo-instagram", "Instagram account")} */}
        {renderDetail("mail-outline", "wssKerala.co")}
        {renderDetail("eye-outline", "Password")}
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Helper function for profile details
const renderDetail = (iconName, text) => (
  <View style={styles.detailItem}>
    <Ionicons name={iconName} size={22} color="#7F4AC3" />
    <Text style={styles.detailText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    height: 180,
    backgroundColor: "#7F4AC3",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    top: 20,
    left: 15,
  },
  profileName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: "#7F4AC3",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    margin: 20,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
