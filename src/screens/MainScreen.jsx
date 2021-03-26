import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {

    let content = <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
            <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        } />

    if (todos.length === 0) content = (
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require("../../assets/images/noitemstoshow.jpg")} />
        </View>
    )
    return (
        <View>
            <View style={styles.block}>
                <AddTodo onSubmit={addTodo} />
            </View >

            <View style={styles.block2}>

                {content}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
        height: 300,
        padding: 15,
        marginTop: 60
        // backgroundColor: 'green'
        
    },
    image: {
        // flex: 1,
        height: '100%', 
        width: '100%',
        resizeMode: 'contain',
    },
})