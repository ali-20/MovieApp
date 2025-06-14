import { View, Text, Pressable, TextInput, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AppIcon, { EAppIconTypes } from './AppIcon'
import globalAppStyles from '../styles/globalAppStyles'
import AppText from './AppText'
import { useNavigation } from '@react-navigation/native'
import { EWatchStackNames } from '../enums/EWatchStackNames'
import tmdbService from '../services/tmdbService'
import { IMovieResponse } from '../interfaces/IMovie'
import { useDispatch } from 'react-redux'
import { clearSearchedMovies, setSearchedMovies } from '../redux/moviesSlice'

const SearchHeader = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const searchTimeout = useRef<NodeJS.Timeout | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const isFetching = useRef(false);
    const pageNumber = useRef(1);
    const totalPages = useRef(0);


    useEffect(() => {
      
    
      return () => {
        dispatch(clearSearchedMovies())
      }
    }, [])
    

    const onSearchToggle = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
             
        }
    }

    const onMovieSearch = (text: string) => {

        searchTimeout.current && clearTimeout(searchTimeout.current);
        searchTimeout.current = setTimeout(() => {
            //search with input query
            searchMoviesWithQueryString(text);
        }, 2000);
        console.log("onMovieSearch", text)
    }

    const searchMoviesWithQueryString = (queryString: string) => {

        setIsLoading(true);
        isFetching.current = true;

        tmdbService.searchMovies(queryString, 1).then((searchRes: IMovieResponse) => {
            pageNumber.current = pageNumber.current + 1;
            totalPages.current = searchRes.total_pages;
            // if (isLoadMore) {
            //     dispatch(appendMovies(moviesResult.results))
            // } 
            // else {
            dispatch(setSearchedMovies(searchRes.results))
            if(searchRes.results.length==0){
                Alert.alert("No Search Result!")
            }
            // }

        }).catch(() => {

        }).finally(() => {
            isFetching.current = false;
            setIsLoading(false)
        });


    }

    return (
        <View style={[{}]}>
            {

                <View style={{
                    backgroundColor: globalAppStyles.primaryBackground,
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 40
                }}>

                    <AppIcon iconType={EAppIconTypes.AntDesign} iconName='search1' iconSize={18}></AppIcon>

                    <TextInput
                        style={{
                            width: '80%',
                            fontSize: globalAppStyles.body

                        }}
                        onChangeText={onMovieSearch}
                        placeholder='TV shows, movies and more'
                    >

                    </TextInput>

                    <Pressable onPress={onSearchToggle}>

                       {
                       isLoading?
                       <ActivityIndicator color={globalAppStyles.primaryColor}></ActivityIndicator>
                       
                       :
                       <AppIcon iconType={EAppIconTypes.AntDesign} iconName='close' iconSize={20}></AppIcon>}
                    </Pressable>
                </View>

            }
        </View>
    )
}

export default SearchHeader