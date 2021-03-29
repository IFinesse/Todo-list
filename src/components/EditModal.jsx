import React, {useState } from 'react'
import { View, TextInput, StyleSheet, Modal, Button, Alert } from 'react-native'
import { THEME } from '../theme'
import {AppButton} from '../components/ui/AppButton'

export const EditModal = ({ visible, value, onCancel, onSave }) => {

    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if(title.trim().length <= 3) {
            Alert.alert("you cannot have less than 4 characters")
        } else {
            onSave(title);
        }
    }

    return (
        <Modal visible={visible} animationType='slide' transparent={false}>
            <View style={styles.wrap}>
                <TextInput 
                style={styles.input} 
                value={title}
                onChangeText={setTitle}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder="enter text"
                maxLength={64}
                
                />
                <View style={styles.buttons}>
                    <AppButton title="cancel" onPress={onCancel} color={THEME.DANGER_COLOR}>Cancel</AppButton>
                    <AppButton title="save" onPress={saveHandler} color='green'>Save</AppButton>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        // backgroundColor: 'green',
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 3,
        width: "80%"
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})