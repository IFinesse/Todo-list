import React, {useState, useContext} from "react";
import { View, StyleSheet } from "react-native";
import {Navbar} from './components/Navbar.jsx'
import {THEME} from './theme'
import { MainScreen } from './screens/MainScreen.jsx'
import { TodoScreen } from './screens/TodoScreen.jsx';
import { TodoContext } from "./context/todo/todoContext.js";


export const MainLayout = () => {

    const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext)

    const [todoId, setTodoId] = useState(null)

    // const [todos, setTodo] = useState([])

    // const addTodo = (title) => {

    //     const newTodo = {
    //       id: Date.now().toString(),
    //       title,
    //     }
    
    //     setTodo((prev) => [...prev, newTodo])
    
    //   }
    
    //   const removeTodo = id => {
    
    //     const todo = todos.find(t => t.id === id);
    
    //     Alert.alert(
    //       "Deleting item",
    //       `Are you sure you want to delete "${todo.title}"?`,
    //       [
    //         {
    //           text: "Cancel",
    //           style: "cancel"
    //         },
    //         {
    //           text: "OK", onPress: () => {
    //             setTodoId(null);
    //             setTodo(prev => prev.filter(todo => todo.id !== id))
    //           }
    //         },
    //       ],
    //       {
    //         cancelable: true,
    //         onDismiss: () => {
    //           Alert.alert("this alert was dismissed by clicking outside the alert dialog")
    //         }
    //       }
    //     );
    
    //   }
    
    //   const updateTodo = (id, title) => {
    //     setTodo(prev => prev.map(todo => {
    //       if (todo.id === id) {
    //         todo.title = title
    //       }
    //       return todo;
    //     }))
    //   }
    
      let content = (
        <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
      )
    
      if (todoId) {
        const todo = todos.find(todo => todo.id === todoId);
        content = (
          <TodoScreen
            goBack={() => setTodoId(null)}
            todo={todo} 
            removeTodo={removeTodo}
            onSave={updateTodo}
          />
        )
      }


  return (
    <View>
      <Navbar title={"todo app"} />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: THEME.PADDING_VERTICAL,
    },
  });
