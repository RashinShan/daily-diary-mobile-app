import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Diary App Group 04 @2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    padding: 10,
    
  },
  footerText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
});

export default Footer;
