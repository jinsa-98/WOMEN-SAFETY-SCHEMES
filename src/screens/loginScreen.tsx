import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";
import Button from "../components/Button";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    const staticEmail = "wsskerala.in";
    const staticPassword = "wss@123";

    if (email === staticEmail && password === staticPassword) {
      Alert.alert("Login Successful", "Welcome to Women Safety Schemes!",
        [
            {text: "OK", onPress: () => navigation.navigate("mainPage")}
        ]
      );
    } else {
      Alert.alert("Login Failed", "Invalid email or password.");
    }
  };

  return (
    <LinearGradient colors={["#FF6F61", "#D742F5"]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <Text style={styles.header}>Women Safety Schemes</Text>

        {/* Email Input */}
        <InputField
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          iconName="email-outline"
        />

        {/* Password Input */}
        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          iconName="lock-outline"
          isPassword
          togglePasswordVisibility={() => setPasswordVisible(!isPasswordVisible)}
        />

        {/* Login Button */}
        <Button title="Login" onPress={handleLogin} />

        {/* Sign-up Option */}
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  signupText: {
    marginTop: 15,
    fontSize: 16,
    color: "#fff",
  },
  signupLink: {
    color: "#FFD700",
    fontWeight: "bold",
  },
});

export default LoginScreen;
