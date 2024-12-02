import React from "react";
import { Stack } from "expo-router";
//chek with this comment janani
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "LogIn" }} />
      <Stack.Screen name="AboutUs" options={{ title: "About Us" }} />
      <Stack.Screen name="ContactUsPage" options={{ title: "ContactUsPage" }} />
      <Stack.Screen name="RegistrationPage" options={{ title: "RegistrationPage" }} />
      <Stack.Screen name="FogetPassword" options={{ title: "FogetPassword" }} />
      <Stack.Screen name="OtpPage" options={{ title: "OtpPage" }} />
      <Stack.Screen name="HomePage" options={{ title: "Home" }} />
     
    </Stack>
  );
};

export default Layout;
