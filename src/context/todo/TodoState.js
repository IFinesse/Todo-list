import React, {useReducer, useContext} from 'react'
import {Alert} from 'react-native'
import {TodoContext} from './todoContext'
import {todoReducer} from './todoReducer'
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types"
import { ScreenContext } from '../screen/screenContext'

export const TodoState = ( {children} ) => {

    const initialState = {
        todos: [{
            id: "11",
            title: "123"
          },
          {
            id: "2",
            title: "abc"
          },]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const {changeScreen} = useContext(ScreenContext)

    const addTodo = title => dispatch({type: ADD_TODO, title});

    const removeTodo = id => {

      const todo = state.todos.find(t => t.id === id);
    
        Alert.alert(
          "Deleting item",
          `Are you sure you want to delete "${todo.title}"?`,
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            {
              text: "OK", onPress: () => {
                changeScreen(null);
                dispatch( {type: REMOVE_TODO, id})
              }
            },
          ],
          {
            cancelable: true,
            onDismiss: () => {
              Alert.alert("this alert was dismissed by clicking outside the alert dialog")
            }
          }
        );


      
      
    
    };
    const updateTodo = (id, title) => dispatch( {type: UPDATE_TODO, id, title})
   
    return (
        <TodoContext.Provider value={ {todos: state.todos, addTodo, removeTodo, updateTodo}}>{children}</TodoContext.Provider>
    )
}