import { View, Text } from 'react-native'
import React from 'react'
import AppHeader from '../components/AppHeader'
import GenresList from '../components/GenresList'

const MovieSearch = () => {
    return (
        <>
            <AppHeader headerType='SEARCH'></AppHeader>
            <GenresList></GenresList>


        </>
    )
}

export default MovieSearch