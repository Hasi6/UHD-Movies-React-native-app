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

class CategoryMoviesGrid extends Component {
  state = {
    searchMovies: [
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
    allMoviesCount: 0,
    category: this.props.category
  };

  componentDidMount = async () => {
      try {
        const res = await axios.get(
          `https://uhdmovies.herokuapp.com/genres/category/${this.state.category}/${this.state.page}`
        );
        await this.setState({
          searchMovies: res.data.searchMovies,
          loading: false,
          allMoviesCount: res.data.moviesCount
        });
      } catch (err) {
        console.error(err.message);
      }
  };

  onPress = async page => {
    console.log(page);
    if (page != this.state.page) {
      await this.setState({
        page: page,
        loading: true
      });
      const res = await axios.get(
        `https://uhdmovies.herokuapp.com/genres/category/${this.state.category}/${this.state.page}`
      );
      console.log(res);
      await this.setState({
        searchMovies: res.data.searchMovies,
        loading: false,
        allMoviesCount: res.data.moviesCount
      });
    }
  };

  renderMovies = () => {
    const items = this.state.searchMovies;
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    if(this.state.allMoviesCount === 0){
      return (<Text>No {this.state.category} Movies Found</Text>)
    }
    return (
      <View>
        <Text>{this.state.category} Movies</Text>
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
    console.log('allmovies ' + this.state.allMoviesCount);
    console.log('page ' + this.state.page);
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

export default CategoryMoviesGrid;
