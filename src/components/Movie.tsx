import { View, Text, Image, Dimensions, Pressable } from 'react-native'
import React, { useMemo } from 'react'
import { IMovie } from '../interfaces/IMovie'
import globalAppStyles from '../styles/globalAppStyles'
import { useNavigation } from '@react-navigation/native'
import { EScreens, EWatchStackNames } from '../enums/EWatchStackNames'
import MovieImage from './MovieImage'
import AppText from './AppText'


interface IMovieComp {
    movie: IMovie
}

const Movie = ({ movie }: IMovieComp) => {

    const navigation = useNavigation();

    const onMoviePress = () => {
        navigation.navigate(EScreens.MOVIEDETAIL, { movie })
    }

    return (
        <Pressable onPress={onMoviePress} style={{ width: '100%', paddingHorizontal: 18, height: 200, marginBottom: 18 }}>
            <View>

                <MovieImage path={
                    
                    movie?.backdrop_path?
                    movie?.backdrop_path:
                    movie?.poster_path
                    } imageStyles={{borderRadius: 12}}></MovieImage>
                <View style={{ position: 'absolute', bottom: 15, left: 15 }}>

                    <AppText style={{ fontSize: globalAppStyles.heading, color: globalAppStyles.secondaryColor }} text={movie.original_title} />
                </View>
            </View>
        </Pressable>
    )
}

export default React.memo(Movie)