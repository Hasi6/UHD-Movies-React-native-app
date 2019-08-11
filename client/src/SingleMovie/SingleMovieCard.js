import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const SingleMovieCard = ({state}) => {
  const {
    category,
    country,
    createdDate,
    description,
    downloadLink,
    idbmRating,
    largeimage,
    name,
    smallimage,
    trailerLink,
    views,
    year,
    _id
  } = state;
  const images = [smallimage, largeimage]
  return (
    <View>
    <SliderBox
    images={images}
    dotColor="#FFEE58"
    inactiveDotColor="#90A4AE"
  />
  <Text>Views {views}</Text>
  <Text>Description {description}</Text>
  <Text>Country {country.map((country)=>{return country})}</Text>
  <Text>Category {category.map((category)=>{return category})}</Text>
  <Text>IdbmRating {idbmRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

export default SingleMovieCard;
