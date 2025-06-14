import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { IMovie, IMovieDetail } from '../interfaces/IMovie';
import MovieImage from '../components/MovieImage';
import AppButton from '../components/AppButton';
import { EAppIconTypes } from '../components/AppIcon';
import AppHeader from '../components/AppHeader';
import globalAppStyles from '../styles/globalAppStyles';
import AppText from '../components/AppText';
import tmdbService from '../services/tmdbService';
import GenresDetail from '../components/GenresDetail';
import OverviewDetail from '../components/OverviewDetail';
import { EScreens } from '../enums/EWatchStackNames';

const MovieDetail = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const movie: undefined | IMovie = route?.params?.movie;

  const [isLoading, setIsLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState<IMovieDetail | null>(null);


  useEffect(() => {

    if (movie) {
      setIsLoading(true);
      tmdbService.getMovieDetails(movie.id).then((detailRes: IMovieDetail) => {
        setMovieDetail(detailRes)
      }).catch(() => {

      }).finally(() => {
        setIsLoading(false)
      })






    }



    return () => {

    }
  }, [])


  const onWatchTrailerPress = () => {
    navigation.navigate(EScreens.MOVIETRAILER,{movieId:movie?.id})
  }

 const onBuyTicketsPress = () => {
    Alert.alert("Coming Soon!😊")
  }

  return (
    movie &&
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>


        <AppHeader isTransparent headerType='TITLEDBACK' title='Watch'></AppHeader>

        <MovieImage path={movie.poster_path}></MovieImage>
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', position: 'absolute', bottom: 40 }}>
          <AppText style={{ color: globalAppStyles.secondaryColor, fontSize: globalAppStyles.heading, marginBottom: 14 }} text={`In Theaters ${movie?.release_date ? new Date(movie.release_date).toDateString() : ''}`}></AppText>
          <AppButton
            buttonHeight={55}
            buttonWidth={'70%'}
            buttonRadius={10}
            buttonType={'FILLED'}
            buttonText='Get Tickets'
            buttonStyles={{ marginBottom: 10 }}
            onPress={onBuyTicketsPress}
          ></AppButton>

          <AppButton
            buttonHeight={55}
            buttonWidth={'70%'}
            buttonRadius={10}
            buttonType={'BORDERED'}
            buttonText='Watch Trailer'
            iconName='controller-play'
            iconType={EAppIconTypes.Entypo}
            iconSize={20}
            onPress={onWatchTrailerPress}
          ></AppButton>
        </View>
      </View>
      <View style={{ flex: 0.4, paddingHorizontal: 40 }}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {movieDetail && <GenresDetail genres={movieDetail.genres}></GenresDetail>}
          {movieDetail && <OverviewDetail overview={movieDetail.overview}></OverviewDetail>}
        </ScrollView>
      </View>


    </View>
  )
}

export default MovieDetail