//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Content, List, ListItem, Icon } from "native-base";
import { Actions } from "react-native-router-flux";

// create a component
class Menu extends Component {
  state = {
    category: false
  };

  ToggleCategory = () => {
    this.setState({
      category: !this.state.category
    });
  };

  Categories = () => {
    if (this.state.category) {
      return (
        <View>
          <ListItem
            onPress={() => Actions.CategoryMovies({categoryname: 'Action'})}
            style={styles.listStyle}
          >
          <Icon name="car" /><Text> Action</Text>
          </ListItem>
          <ListItem onPress={() => Actions.CategoryMovies({categoryname: 'Comedy'})} style={styles.listStyle}>
          <Icon name="happy" style={{marginRight: 10}}/><Text>Comedy</Text>
          </ListItem>
          <ListItem onPress={() => Actions.CategoryMovies({categoryname: 'Horror'})} style={styles.listStyle}>
          <Icon name="sad" style={{marginRight: 10}}/><Text>Comedy</Text>
          </ListItem>
          <ListItem onPress={() => Actions.CategoryMovies({categoryname: 'Crime'})} style={styles.listStyle}>
          <Icon name="sad" style={{marginRight: 10}}/><Text>Comedy</Text>
          </ListItem>
        </View>
      );
    }
    return null;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Content>
            <List>
              <ListItem
                onPress={() => Actions.HomeComponent()}
                style={styles.listStyle}
                
              >
                <Icon name="home" style={{marginRight: 10}}/><Text>Home</Text>
              </ListItem>
              <ListItem onPress={() => Actions.AllMovies()} style={styles.listStyle}>
                <Icon name="film" style={{marginRight: 10}}/><Text>AllMovies</Text>
              </ListItem>
              <ListItem onPress={() => this.ToggleCategory()} style={styles.listStyle}>
                <Icon name="more" style={{marginRight: 10}}/><Text>Categories</Text>
              </ListItem>
              <ListItem style={styles.listStyle}>{this.Categories()}</ListItem>
            </List>
          </Content>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle: { borderBottomColor: "white", borderTopColor: "white" }
});

//make this component available to the app
export default Menu;
