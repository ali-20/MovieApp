import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { IGenre } from '../interfaces/IMovie'
import globalAppStyles from '../styles/globalAppStyles'


interface IGenresDetail {
    genres: Array<IGenre>
}

const GenresDetail = ({ genres }: IGenresDetail) => {


    const genreColors = [

        "#15D2BC",
        "#E26CA5",
        "#564CA3",
        "#CD9D0F"

    ]


    const GenreItem = (item, index) => {
        return (
            <View style={{ marginRight: 10, backgroundColor: genreColors[index % genreColors.length], paddingVertical: 4, paddingHorizontal: 15, borderRadius: 20 }} key={item.id}>
                <Text style={{
                    color: globalAppStyles.secondaryColor
                    , fontSize: globalAppStyles.heading
                }} >{item.name}</Text>
            </View>
        )

    }

    return (
        <View style={{ marginTop: 20, borderBottomWidth: 0.2, borderBottomColor: globalAppStyles.primaryColorFaded, paddingBottom: 25 }}>
            <Text style={{
                color: globalAppStyles.primaryColor
                , fontSize: globalAppStyles.heading, marginBottom: 16,
                fontWeight: globalAppStyles.boldPrimary
            }} >Genres</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={genres}
                renderItem={({ item, index }) => (
                    GenreItem(item, index)
                )}
            />
        </View>
    )
}

export default GenresDetail