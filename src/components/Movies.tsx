import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Movie from './Movie'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import globalAppStyles from '../styles/globalAppStyles'


interface IMovies {
    loadMore: () => void
}

const Movies = ({ loadMore }: IMovies) => {

    const ITEM_HEIGHT = 200;

    const upcomingMovies = useSelector((state: RootState) => state.upcomingMovies.movies);




    const onEndReached = () => {
        loadMore && loadMore();
    }


    return (
        <View style={{ paddingTop: 30, backgroundColor: globalAppStyles.primaryBackground, flex: 1 }}>

            <FlatList
                keyExtractor={item =>`${item.id}`}
                maxToRenderPerBatch={10}
                windowSize={20}
                getItemLayout={(data, index) => (
                    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
                )}
                data={upcomingMovies}
                renderItem={({ item, index }) => (<Movie movie={item}></Movie>)}
                onEndReachedThreshold={0.5}
                onEndReached={onEndReached}
            />
        </View>
    )
}

export default Movies