import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import globalAppStyles from '../styles/globalAppStyles'
import AppIcon, { EAppIconTypes } from './AppIcon'
import AppText from './AppText';


interface IAppButton {
    buttonHeight: number | string,
    buttonWidth: number | string,
    buttonRadius: number,
    buttonType: "FILLED" | "BORDERED",
    buttonText: string,
    iconName: string,
    iconType: EAppIconTypes,
    iconSize: number,
    buttonStyles?: StyleProp<ViewStyle> | undefined;
    onPress: () => void
}

const AppButton = ({onPress, buttonStyles, iconName, iconSize, iconType, buttonType, buttonHeight, buttonWidth, buttonRadius, buttonText }: IAppButton) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.6}
        style={[
            {
                width: buttonWidth,
                height: buttonHeight,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: buttonRadius,
                flexDirection: 'row'

            },
            buttonType == 'BORDERED' ?
                { borderWidth: 1, borderColor: '#61C3F2' }
                :
                { backgroundColor: '#61C3F2', },
            buttonStyles && buttonStyles
        ]}>
            {
                iconName &&
                <View style={{ marginRight: 4 }}>

                    <AppIcon iconName={iconName} iconSize={iconSize} iconType={iconType} iconColor={globalAppStyles.secondaryColor}></AppIcon>
                </View>

            }
            <AppText style={{ fontSize: globalAppStyles.headingTwo, color: globalAppStyles.secondaryColor, fontWeight: globalAppStyles.boldPrimary }} text={buttonText}></AppText>
            
        </TouchableOpacity>
    )
}

export default AppButton