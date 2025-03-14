import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import MainPage from "../screens/mainPage";
import profile from "../screens/profile";

const Tab = createBottomTabNavigator();

const DummyScreen = () => <View style={{ flex: 1, backgroundColor: "#f5f5f5" }} />;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "";

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Profile") {
            iconName = "person-outline"; 
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#fff",
          position: "absolute",
        },
      })}
    >
      <Tab.Screen name="Home" component={MainPage} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={DummyScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
