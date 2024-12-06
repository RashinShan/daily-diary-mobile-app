import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

const Header = () => {
  const router = useRouter(); // Use router for navigation
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle hamburger menu
  const [weather, setWeather] = useState(null); // State to hold weather status
  const [error, setError] = useState(null); // State to hold error if API call fails

  // Update screen width dynamically on orientation change or resize
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(Dimensions.get("window").width);

    const subscription = Dimensions.addEventListener("change", updateScreenWidth);
    return () => subscription.remove(); // Clean up listener
  }, []);

  // Fetch weather data on component mount
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
          params: {
            key: '678eff098b74491eb9a145131240412',
            q: 'Colombo',
          },
        });
        setWeather(response.data); // Store the fetched weather data
        console.log("Fetched Weather Data:", response.data); // Log the fetched weather data
      } catch (error) {
        setError("Failed to load weather data."); // Store error message
        console.error("Error fetching weather data:", error.response?.data || error.message);
      }
    };
  
    fetchWeather();
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

      {/* Display weather information */}
      <View>
        {weather ? (
          <Text style={styles.weatherText}>
            {weather.location.name}: {weather.current.temp_c}°C, {weather.current.condition.text}
          </Text>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <Text style={styles.loadingText}>Loading weather...</Text>
        )}
      </View>

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
  weatherText: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 14,
    color: "red",
  },
  loadingText: {
    fontSize: 14,
    color: "gray",
  },
});

export default Header;
