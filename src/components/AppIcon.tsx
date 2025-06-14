import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import globalAppStyles from '../styles/globalAppStyles'

export enum EAppIconTypes {
    AntDesign = "AntDesign",
    Entypo = "Entypo",
    MaterialIcons = "MaterialIcons",
    FontAwesome = "FontAwesome",
    Feather = "Feather"
}

interface IAppIcon {
    iconType: EAppIconTypes,
    iconName: string,
    iconSize: number,
    iconColor?: string
}

const AppIcon = ({ iconName, iconType, iconSize, iconColor }: IAppIcon) => {

    switch (iconType) {
        case EAppIconTypes.AntDesign:
            return <AntDesign name={iconName} size={iconSize} color={iconColor ? iconColor : globalAppStyles.primaryColor}></AntDesign>
        case EAppIconTypes.Entypo:
            return <Entypo name={iconName} size={iconSize} color={iconColor ? iconColor : globalAppStyles.primaryColor}></Entypo>
        case EAppIconTypes.MaterialIcons:
            return <MaterialIcons name={iconName} size={iconSize} color={iconColor ? iconColor : globalAppStyles.primaryColor}></MaterialIcons>
        case EAppIconTypes.FontAwesome:
            return <FontAwesome name={iconName} size={iconSize} color={iconColor ? iconColor : globalAppStyles.primaryColor}></FontAwesome>
        case EAppIconTypes.Feather:
            return <Feather name={iconName} size={iconSize} color={iconColor ? iconColor : globalAppStyles.primaryColor}></Feather>
        default:
            return <></>
    }


}

export default AppIcon