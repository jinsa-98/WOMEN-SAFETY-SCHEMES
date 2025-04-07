
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Geolocation from "react-native-geolocation-service";
import { fetchUsers } from "../api/api";
// import MapViewComponent from "./MapViewComponent";

const ProfileScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUsers, setShowUsers] = useState(false); 
  const [showContacts, setShowContacts] = useState(false); 
  const [location, setLocation] = useState(null);


  // Request permission (for Android)
  const requestLocationPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app needs access to your location.",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  // Get Location
  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      console.log("Permission denied");
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        console.log("Location:", position);
        setLocation(position.coords);
      },
      (error) => {
        console.log("Error getting location:", error.message);
        setLocation(null);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };


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
          
        <View style={styles.profileImageContainer}>
        <Image
      source={require("../assets/images/cartoon.png")}
      style={styles.profileImage}
    />
        </View>
      </View>

      {/* Profile Details */}
      <ScrollView style={styles.detailsContainer}>
        <TouchableOpacity onPress={() => setShowUsers(!showUsers)}>
          {renderDetail("person-outline", "Users")}
        </TouchableOpacity>

      
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
      {/* Display Latitude & Longitude */}
      <View>
  {location ? (
    <>
      {console.log("Latitude:", location.latitude, "Longitude:", location.longitude)}
      <Text style={styles.locationText}>
        Latitude: {location.latitude}
      </Text>
      <Text style={styles.locationText}>
        Longitude: {location.longitude}
      </Text>
    </>
  ) : (
    <Text style={styles.locationText}>Fetching location...</Text>
  )}
</View>

      </ScrollView>
      
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
    // backgroundColor: "#7F4AC3",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    position: "relative",
  },
  profileName: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileImageContainer: {
    width: 140,
    height: 140,
    borderRadius: 190,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  profileImage: {
    width: "80%",
    height: "80%",
    resizeMode: "cover",
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
  mapContainer: { height: 300, marginVertical: 10 },
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
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  locationText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
