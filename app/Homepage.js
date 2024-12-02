import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OtpEntryPage = () => {
  

 
  return (
    <View style={styles.outerContainer}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.title}>Home page</Text>
        
       
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
   
  });
  
export default OtpEntryPage;
