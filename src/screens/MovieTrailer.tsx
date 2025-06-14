import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../components/AppHeader'
import tmdbService from '../services/tmdbService'
import { useRoute } from '@react-navigation/native'
import { ITrailer, ITrailerResponse } from '../interfaces/IMovie'
import globalAppStyles from '../styles/globalAppStyles'
import TrailerVideo from '../components/TrailerVideo'


const MovieTrailer = () => {

    const route = useRoute();
    const movieId = route?.params?.movieId;


    const [trailer, setTrailer] = useState<ITrailer | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>('')


    const getTrailerUrl = (trailerObj: ITrailer) => {

        try {
            const youtubeBaseUrl = "https://www.youtube.com/watch?v="
            if (trailerObj?.site == "YouTube" && trailerObj?.key) {
                const _trailerUrl = youtubeBaseUrl + trailerObj.key;
                console.log("_trailerUrl:", _trailerUrl);
                setVideoUrl(trailerObj.key);
            }
        } catch (e) {

        }

    }

    useEffect(() => {

        if (movieId) {

            setIsLoading(true)
            tmdbService.getMovieVideos(movieId).then((trailerRes: ITrailerResponse) => {
                if (trailerRes?.results) {

                    if (trailerRes.results.length > 0) {
                        getTrailerUrl(trailerRes.results[0])

                    }

                }
            }).finally(() => {
                setIsLoading(false)
            })

        }

        return () => {

        }
    }, [])



    return (
        <>
            <AppHeader headerType='TITLEDBACK' isTransparent></AppHeader>
            <View style={{ flex: 1, backgroundColor: globalAppStyles.primaryColor }}>
                {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size={30} color={globalAppStyles.secondaryColor} ></ActivityIndicator>
                        </View>
                        :
                        videoUrl &&
                        <TrailerVideo videoUrl={videoUrl}></TrailerVideo>
                }
            </View>


        </>


    )
}

export default MovieTrailer