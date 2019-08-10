import React, { Component } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
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
    loading: true,
    enabled: true
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get("https://uhdmovies.herokuapp.com");
      await this.setState({
        MoviesHeaders: res.data.MoviesHeaders,
        loading: false
      });
    } catch (err) {
      console.error(err.message);
    }
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

    return <MoviesHeader image={images} id={id} />;
  };

  render() {
    return (
      <ScrollView scrollEnabled={this.state.enabled}>
      <NavigationBar />
          {this.renderMoviesName()}
          <ScrollView
          onTouchStart={ev => {
            this.setState({ enabled: false });
          }}
          onTouchMove={ev => {
            this.setState({ enabled: false });
          }}
          onTouchCancel={e => {
            this.setState({ enabled: true });
          }}
          >
            <NewMoviesGrid />
          </ScrollView>
          <ScrollView
          onTouchStart={ev => {
            this.setState({ enabled: false });
          }}
            onTouchMove={ev => {
              this.setState({ enabled: false });
            }}
            onTouchCancel={e => {
              this.setState({ enabled: true });
            }}
          >
            <MostViewsMoviesGrid />
          </ScrollView>
      </ScrollView>
    );
  }
}

export default Home;
