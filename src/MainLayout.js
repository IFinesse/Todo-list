import React, {useState, useContext} from "react";
import { View, StyleSheet } from "react-native";
import {Navbar} from './components/Navbar.jsx'
import {THEME} from './theme'
import { MainScreen } from './screens/MainScreen.jsx'
import { TodoScreen } from './screens/TodoScreen.jsx';
import { TodoContext } from "./context/todo/todoContext.js";
import { ScreenContext } from "./context/screen/screenContext.js";


export const MainLayout = () => {


    const { todoId } = useContext(ScreenContext)

    // const [todoId, setTodoId] = useState(null)

    
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
  

  return (
    <View>
      <Navbar title={"todo app"} />
      <View style={styles.container}>{!todoId? <MainScreen></MainScreen> : <TodoScreen></TodoScreen>}</View>
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
