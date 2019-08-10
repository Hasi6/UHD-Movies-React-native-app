import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

// created components
import Search from "../SearchBar/SearchBar";

class NavigationBar extends Component {
  state = {
    show: false
  };

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  renderNavBar = () => {
    if (this.state.show) {
      return (
        <View>
          <TouchableOpacity style={styles.toggle} onPress={() => this.toggle()}>
            <Icon name="search" />
          </TouchableOpacity>
            <Search />
        </View>
      );
    }
    return (
      <TouchableOpacity style={styles.toggle} onPress={() => this.toggle()}>
        <Icon name="search" style={{ flex: 1, justifyContent: "flex-end", alignItems:'flex-end' }} />
      </TouchableOpacity>
    );
  };

  render() {
    return this.renderNavBar();
  }
}

const styles = {
  viewStyle: {
    paddingTop: 5,
    display: "flex",
    flexDirection: "row"
  },
  touchableOpacityStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    width: "94%",
    marginRight: 3,
    marginLeft: 3
  },
  toggle: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
    height: 30,
    marginRight: "auto",
    marginLeft: "auto"
  }
};

export default NavigationBar;
