import React from 'react'
import {View, StyleSheet, Platform} from 'react-native'
import { THEME } from '../theme'
import {AppText} from '../components/ui/AppText'

export const Navbar = ({title}) => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
            ios: styles.ios_navbar,
            android: styles.android_navbar
        })}}>
            <AppText style={styles.text}>{title}</AppText>
        </View>
    )
}

const styles = StyleSheet.create( {
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    android_navbar: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    ios_navbar: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        marginVertical: 15
    },
    text: {
        color: Platform.OS === 'ios'? THEME.MAIN_COLOR: 'white',
        fontSize: 20
    }
})