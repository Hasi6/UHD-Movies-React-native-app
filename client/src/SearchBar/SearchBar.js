import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { Content, List, ListItem } from "native-base";
import axios from "axios";

class Search extends Component {
  state = {
    searchKeyWord: "",
    onChange: false,
    Movies: [
      {
        category: [],
        country: [],
        createdDate: "",
        description: "",
        downloadLink: "",
        idbmRating: "",
        largeimage: "",
        name: "",
        smallimage: "",
        trailerLink: "",
        views: 0,
        year: "",
        _id: this.props.id
      }
    ]
  };

  onChange = async e => {
    await this.setState({
      searchKeyWord: e,
      onChange: true
    });
    if (this.state.searchKeyWord === "") {
      await this.setState({
        onChange: false
      });
    }

    const res = await axios.get(
      `http://10.0.2.2:5000/search/${this.state.searchKeyWord}`
    );
    await this.setState({
      Movies: res.data.Movies
    });
  };

  searchList = () => {
    if (this.state.onChange) {
      return this.state.Movies.map(movie => {
        return (
          <Content>
            <List>
              <ListItem>
                <Text>{movie.name}</Text>
              </ListItem>
              <ListItem>
                <Text>{movie.year}</Text>
              </ListItem>
            </List>
          </Content>
        );
      });
    }
    return null;
  };

  render() {
    return (
      <View>
        <SearchBar
          lightTheme
          value={this.state.searchKeyWord}
          onChangeText={e => this.onChange(e)}
          placeholder="Type Here..."
        />
        {this.searchList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export default Search;
