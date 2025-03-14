


// import React from "react";
// import { View, StyleSheet } from "react-native";
// import LoginScreen from "./src/screens/LoginScreen";

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <LoginScreen />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;




// import React from "react";
// import { View, StyleSheet } from "react-native";
// import LoginScreen from "./src/screens/loginScreen";
// import MainPage from "./src/screens/mainPage";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();


// const App = () => {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="mainPage" component={MainPage} />
//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;




// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { View } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';

// import LoginScreen from "./src/screens/loginScreen";
// import MainPage from "./src/screens/mainPage";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = 'home-outline';
//           } else if (route.name === "Search") {
//             iconName = "search";
//           } else if (route.name === "Profile") {
//             iconName = "user";
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#007AFF",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: {
//           height: 60,
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           backgroundColor: "#fff",
//           position: "absolute",
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={MainPage} options={{ headerShown: false }} />
//       <Tab.Screen name="Search" component={DummyScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Profile" component={DummyScreen} options={{ headerShown: false }} />
//     </Tab.Navigator>
//   );
// };

// const DummyScreen = () => <View style={{ flex: 1, backgroundColor: "#f5f5f5" }} />;

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="mainPage" component={BottomTabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import LoginScreen from "./src/screens/loginScreen";
import BottomTabNavigator from "./src/components/BottomTabNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="mainPage" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
