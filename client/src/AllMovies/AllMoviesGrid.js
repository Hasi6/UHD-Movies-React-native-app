import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { FlatGrid } from "react-native-super-grid";
import { Actions } from "react-native-router-flux";
import Paginate from "../Pagination/Pagination";

class AllMoviesGrid extends Component {
  state = {
    allMovies: [
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
        _id: ""
      }
    ],
    loading: true,
    page: 1,
    allMoviesCount: 0
  };

  componentDidMount = async () => {
    const res = await axios.get(
      `https://uhdmovies.herokuapp.com/list/${this.state.page}`
    );
    await this.setState({
      allMovies: res.data.allMovies,
      loading: false,
      allMoviesCount: res.data.allMoviesCount
    });
  };

  onPress = async page => {
    if (page != this.state.page) {
      await this.setState({
        page: page,
        loading: true
      });
      const res = await axios.get(
        `https://uhdmovies.herokuapp.com/list/${this.state.page}`
      );
      await this.setState({
        allMovies: res.data.allMovies,
        loading: false,
        allMoviesCount: res.data.allMoviesCount
      });
    }
  };

  renderMovies = () => {
    const items = this.state.allMovies;
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <View>
        <Text>Most Viewd Movies</Text>
        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={item._id}
              onPress={() => Actions.SingleMovie({ id: item._id })}
            >
              <ImageBackground
                source={{ uri: item.smallimage }}
                style={styles.imageStyle}
              >
                <Text>{item.name}</Text>
                <Text>{item.year}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        {this.renderMovies()}
        <Paginate
          allMoviesCount={this.state.allMoviesCount}
          currentPage={this.state.page}
          press={this.onPress}
        />
      </ScrollView>
    );
  }
}

const styles = {
  gridView: {
    marginTop: 20,
    marginBottom: 30,
    height: "auto"
  },
  imageStyle: {
    height: 200,
    width: 190,
    marginRight: 5
  }
};

export default AllMoviesGrid;
