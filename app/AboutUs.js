import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUsScreen = () => {
  return (
  
    <ScrollView contentContainerStyle={styles.container}>
       <View style={styles.container1}>
       <Header />
       </View>
    
      <Text style={styles.header}>Welcome to Diary App</Text>
      <Text style={styles.tagline}>Your Space, Your Story</Text>

      <Text style={styles.sectionTitle}>Introduction</Text>
      <Text style={styles.sectionText}>
        Diary App is more than just a diary; it’s a safe space to express
        yourself, reflect, and keep track of life’s moments. Whether you’re
        journaling your daily thoughts, capturing memories, or setting goals,
        we’re here to make the experience intuitive, secure, and enjoyable.
      </Text>

      <Text style={styles.sectionTitle}>Our Mission</Text>
      <Text style={styles.sectionText}>
        Our mission is simple: to help you embrace mindfulness and personal
        growth through writing. We believe in the power of words and reflection,
        and we’re here to provide you with the tools to document your journey.
      </Text>

      <Text style={styles.sectionTitle}>What We Offer</Text>
      <Text style={styles.sectionText}>
        - User-Friendly Design: Built with simplicity and elegance using the
        latest in React Native technology. - Privacy First: Your thoughts are
        yours alone. Our app ensures that your entries are secure and accessible
        only to you. - Customization: Themes, fonts, and layouts that match your
        unique style. - Daily Reminders: Gentle nudges to keep you consistent in
        your journaling habit. - Versatile Features: Attach photos, voice notes,
        and tags to enrich your entries.
      </Text>

      <View style={styles.developerSection}>
        <Text style={styles.developerTitle}>Developed By</Text>
        <View style={styles.developerList}>
          <View style={styles.developerItem}>
            <Image
              source={require("../assets/shafkan.jpg")}
              style={styles.developerImage}
            />
            <Text style={styles.developerName}>Rashin Shan</Text>
          </View>
          <View style={styles.developerItem}>
            <Image
              source={require("../assets/rashin.png")}
              style={styles.developerImage}
            />
            <Text style={styles.developerName}>Jananai</Text>
          </View>
          <View style={styles.developerItem}>
            <Image
              source={require("../assets/shafkan.jpg")}
              style={styles.developerImage}
            />
            <Text style={styles.developerName}>Pramod</Text>
          </View>
          <View style={styles.developerItem}>
            <Image
              source={require("../assets/shafkan.jpg")}
              style={styles.developerImage}
            />
            <Text style={styles.developerName}>Danushka</Text>
          </View>
          <View style={styles.developerItem}>
            <Image
              source={require("../assets/shafkan.jpg")}
              style={styles.developerImage}
            />
            <Text style={styles.developerName}>Shafkan</Text>
          </View>
        </View>
      </View>
      <View style={styles.container1}>
      <Footer />
       <Header />
       </View>
     
    </ScrollView>
  
  );
};



const styles = StyleSheet.create({
  container1: {
    flex: 1, // Takes up full screen
    backgroundColor: "#ffffff", // White background
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  developerSection: {
    alignItems: "center",
    marginTop: 20,
  },
  developerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  developerList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  developerItem: {
    alignItems: "center",
    margin: 10,
  },
  developerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
  },
  developerName: {
    fontWeight: "bold",
  },
});

export default AboutUsScreen;
