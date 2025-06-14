import { View, Text, Image, StyleProp, ImageStyle } from 'react-native'
import React from 'react'


interface IMovieImage {
    path: string,
    imageStyles?: StyleProp<ImageStyle> | undefined;
}

const MovieImage = ({ path, imageStyles }: IMovieImage) => {
    return (
        <Image
            
            resizeMode='cover'
            style={
                [

                    { width: '100%', height: '100%',  },
                    imageStyles && imageStyles
                ]
            }
            source={{ uri: `https://image.tmdb.org/t/p/w${500}${path}` }}
        ></Image>
    )
}

export default MovieImage