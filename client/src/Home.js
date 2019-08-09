import React, { Component } from "react";
import {
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

// Created Components
import MoviesHeader from "./MoviesHeader";
import NewMoviesGrid from "./NewMoviesGrid";
import NavigationBar from "./NavigationBar/NavigationBar";
import MostViewsMoviesGrid from "./MostViewsMoviesGrid";

class Home extends Component {
  state = {
    MoviesHeaders: [
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
    loading: true
  };

  componentDidMount = async () => {
    const res = await axios.get("http://uhdmovies.herokuapp.com");
    await this.setState({
      MoviesHeaders: res.data.MoviesHeaders,
      loading: false
    });
  };

  renderMoviesName = () => {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }

    let images = this.state.MoviesHeaders.map(movies => {
      return movies.smallimage;
    });

    let id = this.state.MoviesHeaders.map(movies => {
      return movies._id;
    });

    return <MoviesHeader image={images} id={id}/>;
  };

  render() {
    return (
      <ScrollView>
      <NavigationBar />
        {this.renderMoviesName()}
        <NewMoviesGrid />
        <MostViewsMoviesGrid />
      </ScrollView>
    );
  }
}

export default Home;
