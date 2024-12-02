import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OtpEntryPage = () => {
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = () => {
    console.log("Verifying OTP:", otp);
    // Implement OTP verification logic
  };

  return (
    <View style={styles.outerContainer}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.instructions}>
          Enter the OTP sent to your registered email address to proceed.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          onChangeText={setOtp}
          value={otp}
          keyboardType="number-pad"
          maxLength={6}
        />
        <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Verify</Text>
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
  
export default OtpEntryPage;
