import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter(); // Use router for navigation
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle hamburger menu

  // Update screen width dynamically on orientation change or resize
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(Dimensions.get("window").width);

    const subscription = Dimensions.addEventListener("change", updateScreenWidth);
    return () => subscription.remove(); // Clean up listener
  }, []);

  // Breakpoints
  const isMobile = screenWidth < 768; // Mobile breakpoint (< 768px)
  const isTabletOrLaptop = screenWidth >= 768; // Tablet or larger screens (>= 768px)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Diary <Text style={styles.diaryText}>App</Text>
      </Text>

      {isMobile ? (
        <>
          {/* Hamburger Menu for Mobile */}
          <TouchableOpacity onPress={toggleMenu} style={styles.hamburger}>
            <Text style={styles.hamburgerText}>☰</Text>
          </TouchableOpacity>
          {isMenuOpen && (
            <View style={styles.mobileMenu}>
              <TouchableOpacity
                onPress={() => {
                  router.push("/");
                  setIsMenuOpen(false);
                }}
                style={styles.mobileNavItem}
              >
                <Text style={styles.navText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push("/AboutUs");
                  setIsMenuOpen(false);
                }}
                style={styles.mobileNavItem}
              >
                <Text style={styles.navText}>About Us</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push("/ContactUsPage");
                  setIsMenuOpen(false);
                }}
                style={styles.mobileNavItem}
              >
                <Text style={styles.navText}>Contact Us</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      ) : (
        // Full Navbar for Tablet and Larger Screens
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => router.push("/")} style={styles.navItem}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/AboutUs")} style={styles.navItem}>
            <Text style={styles.navText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/ContactUsPage")} style={styles.navItem}>
            <Text style={styles.navText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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
  hamburger: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  hamburgerText: {
    fontSize: 24,
    color: "#fff",
  },
  mobileMenu: {
    position: "absolute",
    top: 80,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5, // Adds shadow on Android
    padding: 10,
  },
  mobileNavItem: {
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
});

export default Header;
