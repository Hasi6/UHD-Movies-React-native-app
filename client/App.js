import React from "react";
import { StyleSheet, Text, View } from "react-native";

// created components
import Router from "./src/Router";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
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

export default App;