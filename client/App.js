import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MenuProvider } from 'react-native-popup-menu';

// created components
import Router from "./src/Router";
import NavigationBar from "./src/NavigationBar/NavigationBar";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
        <MenuProvider>
          <NavigationBar />
        </MenuProvider>
        <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
