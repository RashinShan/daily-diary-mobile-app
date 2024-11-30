import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Diary <Text style={styles.diaryText}>App</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    padding: 30,
    
  },
  headerText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "red",
  },
  diaryText: {
    color: "black",
  },
});

export default Header;
