import React from 'react'
import { StyleSheet, TouchableOpacity, View, Platform, TouchableNativeFeedback } from 'react-native'
import { THEME } from '../../theme'
import { AppTextBold } from './AppTextBold'

export const AppButton = ({ children, onPress, color=THEME.MAIN_COLOR} ) => {

    const Wrapper = Platform.OS === 'android'? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper onPress={onPress} activeOpacity={0.9}>
            <View style={ {...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    )

}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff'
    }
})