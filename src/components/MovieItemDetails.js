import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Image, AirbnbRating } from 'react-native-elements';
import TouchableText from './TouchableText';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { composePictureUrl, rate, unhide } from '../api/movielens';
import MovielensRating from './MovielensRating';
import UserRating from './UserRating';

const MovieItemDetails = ({ itemData, onClose }) => {
  const [rating, setRating] = useState(itemData.movieUserData.rating);
  return (
    <ScrollView>
      <TouchableOpacity onPress={onClose}>
        <Ionicons
          style={{
            alignSelf: 'flex-end',
            marginRight: 10
          }}
          name="ios-close-circle-outline"
          size={35}
          color={colors.secondary}
        ></Ionicons>
      </TouchableOpacity>
      <Image
        style={styles.poster}
        containerStyle={styles.posterContainer}
        source={{ uri: composePictureUrl(itemData.movie.posterPath) }}
      ></Image>
      <Text style={styles.title}>{itemData.movie.title}</Text>
      <View style={styles.ratingsContainer}>
        <MovielensRating rating={itemData.movieUserData.prediction} />
        <Text style={styles.releaseYear}>{itemData.movie.releaseYear}</Text>
        <Text style={styles.mpaa}>{itemData.movie.mpaa}</Text>
        <UserRating rating={itemData.movie.avgRating} />
      </View>

      <AirbnbRating
        showRating={false}
        defaultRating={Math.round(rating)}
        selectedColor={colors.primary}
        onFinishRating={r => {
          rate(null, itemData, r);
          itemData.movieUserData.rating = r;
          setRating(r);
        }}
      />
      {rating ? (
        <TouchableText
          style={styles.unrate}
          textStyle={styles.unrateText}
          onPress={() => {
            unhide(null, itemData.movie.movieId);
            setRating(null);
            itemData.movieUserData.rating = null;
          }}
        >
          Unrate
        </TouchableText>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 160,
    height: 240
  },
  posterContainer: {
    alignSelf: 'center',
    shadowColor: colors.borderColor,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 10
  },
  ratingsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  releaseYear: {
    marginHorizontal: 10
  },
  mpaa: {
    marginHorizontal: 10,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: colors.textColor
  },
  unrate: {
    alignSelf: 'center'
  },
  unrateText: {
    fontSize: 20
  }
});
export default MovieItemDetails;
