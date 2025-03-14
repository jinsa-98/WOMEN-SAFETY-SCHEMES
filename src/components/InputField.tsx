import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  iconName: string;
  isPassword?: boolean;
  togglePasswordVisibility?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  iconName,
  isPassword = false,
  togglePasswordVisibility,
}) => {
  return (
    <View style={styles.inputContainer}>
      {/* <Icon name={iconName} size={24} color="#777" style={styles.icon} /> */}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#ccc"
      />
      {isPassword && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          {/* <Icon
            name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="#777"
          /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#fff",
  },
});

export default InputField;
