import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'


interface IAppText {
    style?: StyleProp<TextStyle> | undefined;
    text:string
}

const AppText = ({ style,text }: IAppText) => {
    return (

        <Text style={[{fontFamily:'poppins'},style]}>{text}</Text>

    )
}

export default AppText