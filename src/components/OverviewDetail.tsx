import { View, Text } from 'react-native'
import React from 'react'
import globalAppStyles from '../styles/globalAppStyles'


interface IOverviewDetail {
    overview: string
}

const OverviewDetail = ({ overview }: IOverviewDetail) => {
    return (
        <View style={{ marginTop: 20,  paddingBottom: 25 }}>
            <Text style={{
                color: globalAppStyles.primaryColor
                , fontSize: globalAppStyles.heading, marginBottom: 16,
                fontWeight: globalAppStyles.boldPrimary
            }} >Overview</Text>

            <Text style={{
                color: globalAppStyles.primaryColor
                , fontSize: globalAppStyles.body, marginBottom: 16,
                lineHeight:globalAppStyles.bodyLineHeight
               
            }} >{overview}</Text>

        </View>
    )
}

export default OverviewDetail