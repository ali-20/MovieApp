import { View, Platform } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppIcon, { EAppIconTypes } from './AppIcon';
import globalAppStyles from '../styles/globalAppStyles';
import AppText from './AppText';

function AppTabBar({ state, descriptors, navigation }) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            flexDirection: 'row',
            paddingBottom: insets.bottom + 10,
            paddingTop: 20,
            backgroundColor: '#2E2739',
            alignItems: 'center',
            borderTopRightRadius: 27,
            borderTopLeftRadius:27,
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <PlatformPressable
                        key={index}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center' }}
                    >

                        <AppIcon
                            iconType={
                                label == "Dashboard" ?

                                    EAppIconTypes.MaterialIcons
                                    :
                                    label == "Watch" ?

                                        EAppIconTypes.FontAwesome
                                        :
                                        label == "MediaLibrary" ?

                                            EAppIconTypes.Entypo
                                            :
                                            label == "More" ?

                                                EAppIconTypes.Feather
                                                :
                                                EAppIconTypes.AntDesign
                            }
                            iconName={
                                label == "Dashboard" ?

                                    'dashboard'
                                    :
                                    label == "Watch" ?

                                        'youtube-play'
                                        :
                                        label == "MediaLibrary" ?

                                            'images'
                                            :
                                            label == "More" ?

                                                'list'
                                                :
                                                ''
                            }
                            iconSize={18}
                            iconColor={isFocused ? globalAppStyles.secondaryColor : globalAppStyles.fadeColor}></AppIcon>


                        <AppText style={{ marginTop: 4, color: isFocused ? globalAppStyles.secondaryColor : globalAppStyles.fadeColor }} text={label == "MediaLibrary" ? "Media Library" : label}></AppText>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}

export default AppTabBar;
