import { View, Text, Pressable } from 'react-native'
import React from 'react'
import AppIcon, { EAppIconTypes } from './AppIcon'
import globalAppStyles from '../styles/globalAppStyles'
import { useNavigation } from '@react-navigation/native'
import AppText from './AppText'


interface ITitledBackHeader {
  title?: string,
  isTransparent?:boolean
}

const TitledBackHeader = ({ title ,isTransparent}: ITitledBackHeader) => {

  const navigation = useNavigation();
  const headerWritingColor = isTransparent?globalAppStyles.secondaryColor:globalAppStyles.primaryColor;
  const onBack = () => {
    if(navigation.canGoBack()){
      navigation.goBack();
    } 
  }

  return (
    <View style={{ width: '100%',  alignItems: 'center', justifyContent: 'flex-start',flexDirection:'row' }}>
      <Pressable onPress={onBack}>

      <AppIcon iconColor={headerWritingColor} iconName='chevron-small-left' iconType={EAppIconTypes.Entypo} iconSize={30}></AppIcon>
      </Pressable>
      <AppText style={{color:headerWritingColor, fontSize:globalAppStyles.headingTwo, textAlign: 'left' ,marginLeft:10}} text={title}></AppText>
    </View>
  )
}

export default TitledBackHeader