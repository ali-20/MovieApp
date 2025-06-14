import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMovie } from '../interfaces/IMovie'

interface IMoviesState {
    movies: Array<IMovie>
    searchedMovies: Array<IMovie>
}

const initialState = {
    movies: [],
    searchedMovies: []
} satisfies IMoviesState as IMoviesState

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setMovies(state, action: PayloadAction<Array<IMovie>>) {



            state.movies = [...action.payload]
        },
        appendMovies(state, action: PayloadAction<Array<IMovie>>) {
            state.movies = [...state.movies, ...action.payload]
        },
        setSearchedMovies(state, action: PayloadAction<Array<IMovie>>) {
            state.searchedMovies = [...action.payload]
        },
        appendSearchedMovies(state, action: PayloadAction<Array<IMovie>>) {
            state.searchedMovies = [...state.movies, ...action.payload]
        },
        clearSearchedMovies(state) {
            state.searchedMovies = []
        },
    },
})

export const { setMovies, appendMovies, setSearchedMovies, appendSearchedMovies, clearSearchedMovies } = counterSlice.actions
export default counterSlice.reducer