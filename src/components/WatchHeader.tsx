import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { EWatchStackNames } from '../enums/EWatchStackNames';
import AppText from './AppText';
import globalAppStyles from '../styles/globalAppStyles';
import AppIcon, { EAppIconTypes } from './AppIcon';

const WatchHeader = () => {
 

    const navigation = useNavigation();


    const onSearchToggle = () => {
        navigation.navigate(EWatchStackNames.MOVIESEARCH)
    }

    return (
        <View style={[{}]}>
            {

                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <AppText style={{ fontSize: globalAppStyles.headingTwo, fontWeight: globalAppStyles.boldPrimary }} text={"Watch"}></AppText>
                    <Pressable onPress={onSearchToggle}>

                        <AppIcon iconType={EAppIconTypes.AntDesign} iconName='search1' iconSize={18}></AppIcon>
                    </Pressable>
                </View>

            }
        </View>
    )
}

export default WatchHeader