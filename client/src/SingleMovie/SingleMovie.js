import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import axios from "axios";
import SingleMovieCard from "./SingleMovieCard";
import Comments from "../Comments/Comments";

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
    },
    comments: [
      {
        createdDate: "",
        email: "",
        message: "",
        movieId: "",
        name: "",
        _id: ""
      }
    ],
    enabled: true
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get(
        `https://uhdmovies.herokuapp.com/single/${this.props.id}`
      );
      await this.setState({
        singleMovie: res.data.singleMovie,
        comments: res.data.comments
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  enableDisableScroll = enable => {
    console.log(enable);
    this.setState({
      enable: enable
    });
  };

  render() {
    // console.log(this.state.enabled);
    return (
      <ScrollView>
        <ScrollView scrollEnabled={this.state.enabled}>
          <SingleMovieCard state={this.state.singleMovie} />
        </ScrollView>
        <ScrollView
          onTouchStart={ev => {
            this.setState({enabled:false} );
          }}
          onTouchMove={ev => {
            this.setState({enabled:false} );
          }}
          onTouchCancel={e => {
            this.setState({enabled:true} );
          }}
          onTouchEnd={e => {
            this.setState({enabled:true} );
          }}
        >
          <Comments
            comments={this.state.comments}
            id={this.state.singleMovie._id}
            scroll={this.enableDisableScroll}
          />
        </ScrollView>
      </ScrollView>
    );
  }
}
export default SingleMovie;
