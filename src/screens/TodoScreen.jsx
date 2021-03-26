import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { EditModal } from '../components/EditModal'
import { AppCard } from '../components/ui/AppCard'
import { THEME } from '../theme'

export const TodoScreen = ({ goBack, removeTodo, todo, onSave }) => {
    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        <View>
            <EditModal visible={modal} onCancel={() => setModal(false)} value={todo.title} onSave={saveHandler}/>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title="Edit" onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title={"back"}
                        color={THEME.GREY_COLOR}
                        onPress={goBack}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title={"delete"}
                        color={THEME.DANGER_COLOR}
                        onPress={() => removeTodo(todo.id)}
                    />
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
    },
    title: {
        fontSize:20,
    }

})
