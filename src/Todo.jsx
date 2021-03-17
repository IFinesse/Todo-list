import React from 'react'
import{View, Text, StyleSheet} from 'react-native'

export const Todo = ({todo}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 1,
        borderColor: "#0101ab",
        margin: 5,
        padding: 5
    },
    text: {

    }
})