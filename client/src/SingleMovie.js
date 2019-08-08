import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";

class SingleMovie extends Component {
  state = {
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
  };

  componentDidMount = async () => {
    const res = await axios.get(`http://10.0.2.2:5000/single/${this.props.id}`);
    console.log(res);
  };

  render() {
    return (
      <View>
        <Text> textInComponent {this.props.id}</Text>
      </View>
    );
  }
}
export default SingleMovie;
