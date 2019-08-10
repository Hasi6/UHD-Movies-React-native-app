import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import SingleMovieCard from "./SingleMovieCard";

class SingleMovie extends Component {
  state = {
    singleMovie: {
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
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get(
        `http://10.0.2.2:5000/single/${this.props.id}`
      );
      await this.setState({
        singleMovie: res.data.singleMovie
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <View>
        <SingleMovieCard state={this.state.singleMovie} />
      </View>
    );
  }
}
export default SingleMovie;
