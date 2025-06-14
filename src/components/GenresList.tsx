import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Genres from './Genres';
import tmdbService from '../services/tmdbService';
import { IGenre } from '../interfaces/IMovie';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import SearchedMovies from './SearchedMovies';

const GenresList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [genres, setGenres] = useState<Array<IGenre>>([])
    const searchedMovies = useSelector((state: RootState) => state.upcomingMovies.searchedMovies)

    useEffect(() => {

        setIsLoading(true)
        tmdbService.getGenres().then((genresResult: { genres: Array<IGenre> }) => {

            setGenres(genresResult.genres)

        }).catch(() => {

        }).finally(() => {
            setIsLoading(false)
        })

        return () => {

        }
    }, [])



    return (
        <View style={{ flex: 1 }}>


            


            {
            
            searchedMovies.length>0?

                <SearchedMovies></SearchedMovies>
            :
            
            
            
            
            isLoading ?
                <View style={{ flex: 1, justifyContent: 'center' }}>

                    <ActivityIndicator color={"#00000"} size={50} />
                </View>
                :
                <Genres genres={genres}></Genres>
            }
        </View>
    )
}

export default GenresList