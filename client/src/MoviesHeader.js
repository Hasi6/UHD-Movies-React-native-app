import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Actions } from 'react-native-router-flux';


const MoviesHeader = ({image, id}) => {
    return (
        <View>
        <SliderBox
        images={image}
        onCurrentImagePressed={(index) => Actions.SingleMovie({id:id[index]})}
        dotColor="#FFEE58"
        inactiveDotColor="#90A4AE"
      />
        </View>
    )
}

export default MoviesHeader
