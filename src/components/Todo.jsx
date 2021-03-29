import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {AppTextBold} from '../components/ui/AppTextBold'


export const Todo = ({ todo, onRemove, onOpen }) => {
    
    return (
        <TouchableOpacity 
        activeOpacity={0.1} 
        onPress={() => onOpen(todo.id)}
        onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.item}>
                <AppTextBold>{todo.title}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderColor: "#0101ab",
        margin: 5,
        padding: 5
    },
})