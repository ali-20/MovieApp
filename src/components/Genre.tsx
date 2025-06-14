import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AppText from './AppText'
import globalAppStyles from '../styles/globalAppStyles'
import { IGenre } from '../interfaces/IMovie'


interface IGenreComp {
    genre: IGenre
    index: number
   
}

const Genre = ({ genre, index }: IGenreComp) => {

  const genreColors = [
  "#8DE5DC",
  "#F48FB1",
  "#A5A6F6",
  "#F6C85F",
  "#81D4FA",
  "#FF8A65",
  "#BA68C8",
  "#AED581",
  "#FFD54F",
  "#F06292",
  "#4DD0E1",
  "#9CCC65",
  "#FFB74D",
  "#90A4AE",
  "#A1887F",
  "#76D7C4",
  "#81C784",
  "#64B5F6",
  "#CE93D8",
  "#7986CB",
  "#FDD835",
  "#FF7043",
  "#E57373",
  "#B0BEC5",
  "#E0E0E0",
  "#FF9AA2",
  "#B39DDB",
  "#AED9E0",
  "#FFCCBC",
  "#F6BFCB"
];
    const onGenrePress = () => {

    }

    return (
        <Pressable onPress={onGenrePress} style={{ width: '45%', marginLeft: 12, paddingHorizontal: 18, height: 100, marginBottom: 12, backgroundColor: genreColors[index % genreColors.length], borderRadius: 12 }}>
            <View>

                {/* <MovieImage path={movie.backdrop_path} imageStyles={{ borderRadius: 12 }}></MovieImage> */}
                <View style={{ position: 'absolute', bottom: 20, left: 2 }}>

                    <AppText style={{ fontSize: globalAppStyles.heading, color: globalAppStyles.secondaryColor }} text={genre.name} />
                </View>
            </View>
        </Pressable>
    )
}

export default Genre