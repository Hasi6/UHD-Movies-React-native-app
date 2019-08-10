import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Button,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { FlatGrid } from "react-native-super-grid";
import { Actions } from "react-native-router-flux";

class NewMoviesGrid extends Component {
  state = {
    movies: [
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
    const res = await axios.get("http://10.0.2.2:5000");
    await this.setState({
      movies: res.data.movies,
      loading: false
    });
  };

  renderMovies = () => {
    
    const items = this.state.movies.map(movie => {
      return movie;
    });
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <View>
      <Text>New Movies</Text>
      <FlatGrid
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
            <TouchableOpacity
              key={item._id}
              onPress={() => Actions.SingleMovie({ id: item._id })}
            >
              <ImageBackground
                source={{ uri: item.smallimage }}
                style={styles.imageStyle}
                
              >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.year}>{item.year}</Text>
              </ImageBackground>
            </TouchableOpacity>
        )}
      />
      </View>
    );
  };

  render() {
    return <View>{this.renderMovies()}</View>;
  }
}

const styles = {
  gridView: {
    marginTop: 20,
    flex: 1,
    height: 200,
  },
  imageStyle:{
    width: 133,
    height: 150,
    margin: 5,
    borderRadius: 20
  },
  name:{
    color: 'yellow',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 20

  },
  year: {

  }
};

export default NewMoviesGrid;
