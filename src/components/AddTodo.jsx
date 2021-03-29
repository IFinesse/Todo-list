import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const onHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss()
        } else {
            Alert.alert("an item cannot be empty")
        }

        
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.text} 
            onChangeText={setValue}
            placeholder='write new item'
            value={value}
            // keyboardType='numeric'
            autoCapitalize='words'
            autoCorrect={true}
            />
            <AntDesign.Button onPress={onHandler} name='pluscircleo' >Add</AntDesign.Button>
            {/* <Button title={'Add'} onPress={onHandler}/> */}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10.
    },
    text: {
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: '#000011'
    }
})