import React, { useContext, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { EditModal } from '../components/EditModal'
import { AppCard } from '../components/ui/AppCard'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
import { THEME } from '../theme'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const TodoScreen = () => {


    const {todos, updateTodo, removeTodo} = useContext(TodoContext)
    const {TodoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false);

    const todo = todos.find(todo => todo.id === TodoId)

    console.log(todo);

    const saveHandler = title => {
        updateTodo(todo.id, title);
        setModal(false);
    }

    return (
        <View style={styles.container}>
            <EditModal visible={modal} onCancel={() => setModal(false)} value={todo.title} onSave={saveHandler} />
            <AppCard style={styles.card}>
                <AppText>{todo.title}</AppText>
                <AppButton onPress={() => setModal(true)} color='olive'>
                    <FontAwesome name='edit' color='#fff' size={20} />
                </AppButton>
                {/* <Button title="Edit" onPress={() => setModal(true)}/> */}
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    {/* <Button
                        title={"back"}
                        color={THEME.GREY_COLOR}
                        onPress={goBack}
                    /> */}
                    <AppButton onPress={() => changeScreen(null)} color={THEME.GREY_COLOR}>
                        <AntDesign name='back'  size={40} color='#fff'/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    {/* <Button
                        title={"delete"}
                        color={THEME.DANGER_COLOR}
                        onPress={() => removeTodo(todo.id)}
                    /> */}
                    <AppButton onPress={() => removeTodo(todo.id)} color={THEME.DANGER_COLOR}>
                        <FontAwesome name='remove'  size={40} color='#fff'/>
                    </AppButton>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 20,
        // flex: 1,
        // justifyContent: 'space-evenly'
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    },
    button: {
        width: Dimensions.get('window').width > 400? 200 : 140,
    },
    card: {
        // margin: 30,
        // padding: 15,
    }

})
