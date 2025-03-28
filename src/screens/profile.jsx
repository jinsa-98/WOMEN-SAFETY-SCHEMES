
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { fetchUsers } from "../api/api";

const ProfileScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUsers, setShowUsers] = useState(false); 
  const [showContacts, setShowContacts] = useState(false); 

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetchUsers();
      if (response?.data) {
        setUsers(response.data); 
      } else {
        setUsers([]);
      }
      setLoading(false);
    };
    getUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.profileName}>User</Text>
        <View style={styles.profileImageContainer}></View>
      </View>

      {/* Profile Details */}
      <ScrollView style={styles.detailsContainer}>
        <TouchableOpacity onPress={() => setShowUsers(!showUsers)}>
          {renderDetail("person-outline", "User")}
        </TouchableOpacity>

        {/* Show user names when clicked */}
        {showUsers &&
          users.map((user) => (
            <Text key={user._id} style={styles.userName}>
              {user.name}
            </Text>
          ))}
          <TouchableOpacity onPress={()=> setShowContacts(!showContacts)}>
          {renderDetail("call-outline", "Contacts")}
          </TouchableOpacity>
       {showContacts&& 
       users.map((contact) =>(
        <Text key={contact._id} style={styles.userName}>
           {contact.name} : {contact.contact}</Text>
       ))}
        {renderDetail("mail-outline", "Email")}
        {renderDetail("location-outline", "Location")}
      </ScrollView>

      {/* Edit Profile Button */}
      {/* <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit profile</Text>
      </TouchableOpacity> */}
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
  userName: {
    fontSize: 16,
    color: "#555",
    marginLeft: 40,
    paddingVertical: 5,
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
