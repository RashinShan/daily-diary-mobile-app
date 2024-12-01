import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="AboutUs" options={{ title: "About Us" }} />
     
    </Stack>
  );
};

export default Layout;
