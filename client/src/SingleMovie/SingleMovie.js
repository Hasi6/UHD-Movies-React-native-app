import React, { Component } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import axios from "axios";
import { Content, List, ListItem, Button } from "native-base";
import Textarea from "react-native-textarea";
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
    enabled: true,

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

  scroll = (enabled)=>{
    this.setState({
      enabled: enabled
    })
  }

  

  render() {
    // console.log(this.state.enabled);
    return (
      <ScrollView scrollEnabled={this.state.enabled}>
        <SingleMovieCard state={this.state.singleMovie} />
          <Comments id={this.state.singleMovie._id} scroll={this.scroll}/>
        </ScrollView>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: "#F5FCFF"
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#333"
  }
};
export default SingleMovie;
