import React, { Component } from "react";
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from "react-native";

// created Components
import NavigationBar from "../NavigationBar/NavigationBar";
import CategoryMoviesGrid from "./CategoryMoviesGrid";

class CategoryMovies extends Component {
  renderMovies = () => {
    return <CategoryMoviesGrid category={this.props.categoryname}/>;
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

export default CategoryMovies;
