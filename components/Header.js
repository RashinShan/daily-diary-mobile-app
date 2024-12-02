import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter(); // Use router for navigation

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Diary <Text style={styles.diaryText}>App</Text>
      </Text>

      {/* Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.push('/HomePage')} style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/AboutUs')} style={styles.navItem}>
          <Text style={styles.navText}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/ContactUsPage')} style={styles.navItem}>
          <Text style={styles.navText}>ContactUsPage</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
  },
  diaryText: {
    color: "black",
  },
  navbar: {
    flexDirection: "row",
    marginTop: 15,
    
  },
  navItem: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  navText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Header;
