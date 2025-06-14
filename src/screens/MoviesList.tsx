import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Movies from '../components/Movies'
import tmdbService from '../services/tmdbService';
import { useDispatch } from 'react-redux'
import { appendMovies, setMovies } from '../redux/moviesSlice';
import { IMovieResponse } from '../interfaces/IMovie';

const MoviesList = () => {


  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const currentPage = useRef(1);
  const totalPages = useRef(0);
  const isFetching = useRef(false);

  useEffect(() => {

    setIsLoading(true);
    
    loadMovies();

    return () => {

    }
  }, [])


  const loadMovies = (isLoadMore?: boolean) => {
    isFetching.current = true;
    tmdbService.getUpcomingMovies(currentPage.current).then((moviesResult: IMovieResponse) => {

      currentPage.current = currentPage.current + 1;
      totalPages.current = moviesResult.total_pages;
      if (isLoadMore) {
        dispatch(appendMovies(moviesResult.results))
      } else {
        dispatch(setMovies(moviesResult.results))
      }


    }).catch(() => {

    }).finally(() => {
      isFetching.current = false;
      setIsLoading(false)
    });
  }

  const loadMore = () => {

    if (!isFetching.current) {
      loadMovies(true);
    }

  }


  return (
    <View style={{ flex: 1 }}>
      {isLoading ?
        <View style={{ flex: 1, justifyContent: 'center' }}>

          <ActivityIndicator color={"#00000"} size={50} />
        </View>
        :
        <Movies loadMore={loadMore}></Movies>
      }
    </View>
  )
}

export default MoviesList