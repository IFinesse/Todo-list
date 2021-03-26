import React from 'react'
import {StyleSheet, View} from 'react-native'

export const AppCard = props => <View style={{...styles.default, ...props.style}}>{props.children}</View>

const styles = StyleSheet.create({
    default: {
        flexDirection:'row',
        // margin: 30,
        padding: 20,
        // borderWidth: 2,
        // borderColor: 'green',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 8
    }
})