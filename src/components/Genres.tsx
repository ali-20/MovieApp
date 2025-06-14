import { View, Text, FlatList } from 'react-native'
import React from 'react'
import globalAppStyles from '../styles/globalAppStyles'
import { IGenre } from '../interfaces/IMovie'
import Genre from './Genre'




interface IGenres {
    genres: Array<IGenre>
}


const Genres = ({ genres }: IGenres) => {

    const ITEM_HEIGHT = 200;

    return (
        <View style={{ paddingTop: 30, backgroundColor: globalAppStyles.primaryBackground, flex: 1 }}>

            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                numColumns={2}
                maxToRenderPerBatch={10}
                windowSize={20}
                getItemLayout={(data, index) => (
                    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
                )}
                data={genres}
                renderItem={({ item, index }) => (<Genre index={index} genre={item}></Genre>)}

            />
        </View>
    )
}

export default Genres