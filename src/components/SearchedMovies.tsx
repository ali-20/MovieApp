import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import globalAppStyles from '../styles/globalAppStyles';
import Movie from './Movie';

const SearchedMovies = () => {


    const ITEM_HEIGHT = 200;
    const searchedMovies = useSelector((state: RootState) => state.upcomingMovies.searchedMovies);

    return (
        <View style={{ paddingTop: 30, backgroundColor: globalAppStyles.primaryBackground, flex: 1 }}>

            <FlatList
                maxToRenderPerBatch={10}
                windowSize={20}
                getItemLayout={(data, index) => (
                    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
                )}
                data={searchedMovies}
                renderItem={({ item, index }) => (<Movie movie={item}></Movie>)}
            // onEndReachedThreshold={0.5}
            // onEndReached={onEndReached}
            />
        </View>
    )
}

export default SearchedMovies