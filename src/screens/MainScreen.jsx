import React, { useContext, useEffect, useState, useCallback } from 'react'
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'
import { AppButton } from '../components/ui/AppButton'
import { AppLoader } from '../components/ui/AppLoader'
import { AppText } from '../components/ui/AppText'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'
import { THEME } from '../theme'

export const MainScreen = () => {

    const {todos, addTodo, removeTodo, fetchTodos, loading, error} = useContext(TodoContext);

    const {changeScreen} = useContext(ScreenContext)

    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL*2);
    
    let content = (
        <View style={ {width: deviceWidth}}>
            <FlatList
                data={todos}
                ListEmptyComponent={() => {
                    return (
                    <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require("../../assets/images/noitemstoshow.jpg")} />
        </View>)
                }}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
                }
            />
        </View>
    )

    const loadTodos = useCallback( async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos();
    }, [])

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL*2;
            setDeviceWidth(width);
        }
        Dimensions.addEventListener('change', update);
        return () => {Dimensions.removeEventListener('change', update)};
    })

    if (loading) {
        // console.log('11111111111');
         return (<AppLoader />)
        
    }

    if (error) {
        return (<View style={styles.center}>
                    <AppText style={styles.error}>Something went wrong :{"("}</AppText>
                    <AppButton onPress={loadTodos}>Try again</AppButton>
                </View>)
    }
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
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        color: THEME.DANGER_COLOR,
        fontSize: 20
    }
})