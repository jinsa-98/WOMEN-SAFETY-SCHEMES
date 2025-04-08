import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", name: "chatbot", text: "Hi! How can I help you today?", time: "12:25" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = {
      from: "user",
      name: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    let botReply = "Sorry, I didn’t understand that.";
    if (input.toLowerCase().includes("safety"))
      botReply = "You can check 'Women Safety Division' in the list above.";
    else if (input.toLowerCase().includes("helpline"))
      botReply = "Dial 181 or visit the 'Women Helpline' link.";
    else if (input.toLowerCase().includes("erss"))
        botReply = "Emergency Response Support System (ERSS) is a Pan-India single number (112) based emergency response system for citizens in emergencies";
    else if (input.toLowerCase().includes("job"))
      botReply = "Check out 'Standup India' or 'Udyogini' for women entrepreneurship support.";

    const botMsg = {
      from: "bot",
      name: "chatbot",
      text: botReply,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image
      source={require("../assets/images/cartoon.png")}
      style={styles.profilePic}
    />
        <View>
          <Text style={styles.headerName}>Chat Bot</Text>
          <Text style={styles.headerRole}>AI</Text>
        </View>
      </View>

      <ScrollView style={styles.chatArea}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageRow,
              msg.from === "user" ? styles.userRow : styles.botRow,
            ]}
          >
            {msg.from === "bot" && (
              <Image
              source={require("../assets/images/cartoon.png")}
                style={styles.avatar}
              />
            )}
            <View style={styles.bubbleGroup}>
              <Text style={styles.nameText}>{msg.name}</Text>
              <View
                style={[
                  styles.messageBubble,
                  msg.from === "user" ? styles.userBubble : styles.botBubble,
                ]}
              >
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
              <Text style={styles.timeText}>{msg.time}</Text>
            </View>
            {msg.from === "user" && (
              <Image
                source={require("../assets/images/userchatbot.png")}
                style={styles.avatar}
              />
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.chatInput}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A084E8",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  headerRole: {
    color: "#fff",
    fontSize: 12,
  },
  chatArea: {
    flex: 1,
    paddingVertical: 10,
  },
  messageRow: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "flex-end",
  },
  botRow: {
    justifyContent: "flex-start",
  },
  userRow: {
    justifyContent: "flex-end",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 6,
  },
  bubbleGroup: {
    maxWidth: "70%",
  },
  nameText: {
    fontSize: 12,
    marginBottom: 2,
    color: "#555",
  },
  messageBubble: {
    borderRadius: 12,
    padding: 10,
  },
  botBubble: {
    backgroundColor: "#E9E7FD",
    borderTopLeftRadius: 0,
  },
  userBubble: {
    backgroundColor: "#D1C2FF",
    borderTopRightRadius: 0,
  },
  messageText: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 10,
    color: "#888",
    marginTop: 2,
    alignSelf: "flex-end",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  chatInput: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
    marginRight: 10,
    fontSize: 14,
  },
  sendButton: {
    backgroundColor: "#A084E8",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
