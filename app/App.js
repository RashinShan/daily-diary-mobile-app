import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import LoginPage from "../components/login";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <LoginPage />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up full screen
    backgroundColor: "#ffffff", // White background
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
});

export default App;
