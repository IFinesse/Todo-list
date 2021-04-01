import React, {useReducer, useContext} from 'react'
import {Alert} from 'react-native'
import {TodoContext} from './todoContext'
import {todoReducer} from './todoReducer'
import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, SHOW_LOADER, SHOW_ERROR, CLEAR_ERROR } from "../types"
import { ScreenContext } from '../screen/screenContext'

export const TodoState = ( {children} ) => {

    const initialState = {
        // todos: [{
        //     id: "111",
        //     title: "def"
        //   },      
        //   {
        //     id: "2",
        //     title: "abc"
        //   },]
        todos: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const {changeScreen} = useContext(ScreenContext)

    const  addTodo = async title => {
      const response = await fetch('https://rn-todo-list-8f8c9-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
        method: 'POST',
        headers: 'application/json',
        body: JSON.stringify( {title})
      })
      const data = await response.json()
      console.log("data", data);
      dispatch({type: ADD_TODO, title});
    }

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

    const showLoader = () => dispatch( {type: SHOW_LOADER})

    const showError = (error) => dispatch( {type: SHOW_ERROR, error})

    const clearError = () => dispatch( {type: CLEAR_ERROR})
   
    return (
        <TodoContext.Provider value={ {todos: state.todos, addTodo, removeTodo, updateTodo}}>{children}</TodoContext.Provider>
    )
}