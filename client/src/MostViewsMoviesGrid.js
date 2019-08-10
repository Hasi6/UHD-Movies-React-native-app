import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import { FlatGrid } from "react-native-super-grid";
import { Actions } from "react-native-router-flux";

class MostViewsMoviesGrid extends Component {
  state = {
    topViewedMovies: [
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
    try {
      const res = await axios.get("https://uhdmovies.herokuapp.com");
      await this.setState({
          topViewedMovies: res.data.topViewedMovies,
        loading: false
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  renderMovies = () => {
    
    const items = this.state.topViewedMovies.map(movie => {
      return movie;
    });
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
                style={styles.gridView}
              >
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.year}</Text>
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
    height: 200
  }
};

export default MostViewsMoviesGrid;
