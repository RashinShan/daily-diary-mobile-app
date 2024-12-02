import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    console.log("Reset password for:", email);
    // Implement reset password logic, e.g., send reset email
  };

  return (
    <View style={styles.outerContainer}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.instructions}>
          Enter your registered email address, and we will send you an OTP to reset your password.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
    outerContainer: {
      flex: 1,
      backgroundColor: "#f0f0f0",
      justifyContent: "space-between",
      alignItems: "center",
    },
    content: {
      width: "90%",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      padding: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      marginBottom: 15,
    },
    button: {
      marginTop: 10,
      backgroundColor: "#007bff",
      padding: 10,
      borderRadius: 5,
      width: "60%",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
    },
    instructions: {
      fontSize: 16,
      color: "#666",
      marginBottom: 15,
      textAlign: "center",
    },
  });
  

export default ForgetPasswordPage;
