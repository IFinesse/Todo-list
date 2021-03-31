import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import { THEME } from '../theme'

export const MainScreen = () => {

    const {todos, addTodo, removeTodo} = useContext(TodoContext);

    const {changeScreen} = useContext(ScreenContext)

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL*2);
    
    let content = (
        <View style={ {width: deviceWidth}}>
            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
                }
            />
        </View>
    )

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL*2;
            setDeviceWidth(width);
        }
        Dimensions.addEventListener('change', update);
        return () => {Dimensions.removeEventListener('change', update)};
    })



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