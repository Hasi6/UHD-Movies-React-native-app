import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from "react-native";

// created Components
import NavigationBar from "../NavigationBar/NavigationBar";
import AllMoviesGrid from "./AllMoviesGrid";

class AllMovies extends Component {
  renderMovies = () => {
    return <AllMoviesGrid />;
  };

  render() {
    return (
      <ScrollView>
        <View>
          <NavigationBar />
        </View>
        <View style={styles.container}>{this.renderMovies()}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  }
});

export default AllMovies;
