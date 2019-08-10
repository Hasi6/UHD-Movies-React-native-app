//import liraries
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Content, List, ListItem } from "native-base";
import { Actions } from "react-native-router-flux";

// create a component
const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container} />
      <View style={{ flex: 2 }}>
        <Content>
          <List>
            <ListItem>
              <Image source={{uri: './assets/logo4.png'}}/>
            </ListItem>
            <ListItem onPress={() => Actions.HomeComponent()}>
              <Text>Home</Text>
            </ListItem>
            <ListItem onPress={() => Actions.AllMovies()}>
              <Text>AllMovies</Text>
            </ListItem>
          </List>
        </Content>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default Menu;
