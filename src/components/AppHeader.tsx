import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SearchHeader from './SearchHeader'
import TitledBackHeader from './TitledBackHeader'
import WatchHeader from './WatchHeader'



interface IAppHeader {
    headerType: "SEARCH" | "TITLEDBACK" | "HOME"
    title?: string,
    isTransparent?: boolean
}

const AppHeader = ({ headerType, title, isTransparent }: IAppHeader) => {

    const insets = useSafeAreaInsets();

    const renderHeader = () => {
        switch (headerType) {

            case 'HOME':
                return <WatchHeader/>

            case 'SEARCH':
                return <SearchHeader />

            case 'TITLEDBACK':
                return <TitledBackHeader title={title} isTransparent={isTransparent} />

        }
    }

    return (
        <View style={
            [{
                paddingHorizontal: 16,
                width: '100%',

                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 20
            },
            isTransparent ? {
                position: 'absolute', top: insets.top, zIndex: 999999999,
            } : {
                paddingTop: insets.top + 10,
            }
            ]
        }>

            {
                renderHeader()
            }



        </View>
    )
}

export default AppHeader