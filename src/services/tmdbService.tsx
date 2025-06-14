
import axios, { AxiosInstance } from 'axios'
import { Alert } from 'react-native';
import { IGenre, IMovieDetail, IMovieResponse, ITrailerResponse } from '../interfaces/IMovie';

const UPCOMING_MOVIES = "/movie/upcoming";
const GENRES = "/genre/movie/list";
const SEARCH = "/search/movie";

const MOVIE_LANGUAGE = 'en-US'
let apiInstance: AxiosInstance | null = null;


const setApiInstance = () => {
    const _apiInstance = axios.create({
        baseURL: process.env["API_URL"],
        timeout: 10000,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env["API_TOKEN"]}`
        }
    });
    apiInstance = _apiInstance;
    return _apiInstance;
}

const getApiInstance = () => {
    if (apiInstance) {
        return apiInstance;
    } else {
        return setApiInstance();
    }
}

const getUpcomingMovies = (pageNumber: number) => {
    return new Promise((resolve: (val: IMovieResponse) => void, reject) => {

        // const url = `${UPCOMING_MOVIES}
        console.log("getting movies for page:", pageNumber)
        getApiInstance().get(UPCOMING_MOVIES, {
            params: {
                page: pageNumber,
                language: MOVIE_LANGUAGE
            }
        }).then((res) => {
            console.log('movies Response:', res);
            if (res.status == 200) {
                resolve(res.data);
            } else {
                Alert.alert("Failed to get the movies list, please try again later!")
                reject();
            }
        }).catch((e) => {
            Alert.alert("Failed to get the movies list, please try again later!")
            console.log('error getting upcoming movies', e);
            reject();
        })

    })
}

const getMovieDetails = (id: number) => {
    return new Promise((resolve: (val: IMovieDetail) => void, reject) => {


        console.log("ENV DATA:", process.env["API_URL"])
        console.log("getApiInstance():", getApiInstance());
        getApiInstance().get(`/movie/${id}?language=en-US`,
            {
                params: {

                    language: MOVIE_LANGUAGE
                }
            }
        )
            .then((res) => {
                console.log('movie detail Response:', res);
                if (res.status == 200) {
                    resolve(res.data);
                } else {
                    Alert.alert("Failed to get the movie detail, please try again later!")
                    reject();
                }
            }).catch((e) => {
                Alert.alert("Failed to get the movie detail, please try again later!")
                console.log('error getting upcoming movie detail', e);
                reject();
            })

    })
}


const getGenres = () => {
    return new Promise((resolve: (val: { genres: Array<IGenre> }) => void, reject) => {




        getApiInstance().get(GENRES,
            {
                params: {

                    language: MOVIE_LANGUAGE
                }
            }
        )
            .then((res) => {
                console.log('Genres detail Response:', res);
                if (res.status == 200) {
                    resolve(res.data);
                } else {
                    Alert.alert("Failed to get the Genres list, please try again later!")
                    reject();
                }
            }).catch((e) => {
                Alert.alert("Failed to get the Genres list, please try again later!")
                console.log('error getting upcoming movie detail', e);
                reject();
            })

    })


}

const searchMovies = (searchString: string, pagenumber: number) => {
    return new Promise((resolve: (val: IMovieResponse) => void, reject) => {




        getApiInstance().get(SEARCH,
            {
                params: {
                    query: searchString,
                    include_adult: true,
                    page: 1,
                    language: MOVIE_LANGUAGE
                }
            }
        )
            .then((res) => {
                console.log('searchMovies detail Response:', res);
                if (res.status == 200) {
                    resolve(res.data);
                } else {
                    Alert.alert("Failed to get the Movies list, please try again later!")
                    reject();
                }
            }).catch((e) => {
                Alert.alert("Failed to get the Movies list, please try again later!")
                console.log('error getting upcoming movie detail', e);
                reject();
            })

    })
}

const getMovieVideos = (id: number) => {
    return new Promise((resolve: (val: ITrailerResponse) => void, reject) => {


        console.log("ENV DATA:", process.env["API_URL"])
        console.log("getApiInstance():", getApiInstance());
        getApiInstance().get(`/movie/${id}/videos`,
            {
                params: {

                }
            }
        )
            .then((res) => {
                console.log('movie trailer Response:', res);
                if (res.status == 200) {
                    resolve(res.data);
                } else {
                    Alert.alert("Failed to get the movie trailer, please try again later!")
                    reject();
                }
            }).catch((e) => {
                Alert.alert("Failed to get the movie trailer, please try again later!")
                console.log('error getting upcoming movie trailer', e);
                reject();
            })

    })
}


const tmdbService = {

    getUpcomingMovies,
    getMovieDetails,
    getGenres,
    searchMovies,
    getMovieVideos


}

export default tmdbService;

