import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { EditModal } from '../components/EditModal'
import { AppCard } from '../components/ui/AppCard'
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton'
import { THEME } from '../theme'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

export const TodoScreen = ({ goBack, removeTodo, todo, onSave }) => {
    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        <View>
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
                    <AppButton onPress={goBack} color={THEME.GREY_COLOR}>
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
    buttons: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    button: {
        width: "40%"
    },
    card: {
        margin: 30,
        padding: 15,
    }

})
