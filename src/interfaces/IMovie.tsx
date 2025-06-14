export interface IMovie {
    adult: boolean,
    backdrop_path: 'string'
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface IMovieResponse {
    dates: { maximum: string, minimum: string }
    page: number
    results: Array<IMovie>
    total_pages: number
    total_results: number

}

export interface IMovieDetail {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: Array<IGenre>
    homepage: string
    id: number
    imdb_id: string
    origin_country: Array<string>
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Array<any>
    production_countries: Array<any>
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Array<any>
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface IGenre {
    id: number
    name: string
}



export interface ITrailerResponse {
    id: number
    results: Array<ITrailer>
}


export interface ITrailer {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}