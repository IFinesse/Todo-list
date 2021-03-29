import React, { useState } from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Navbar } from './src/components/Navbar.jsx'
import { MainScreen } from './src/screens/MainScreen.jsx'
import { TodoScreen } from './src/screens/TodoScreen.jsx';


async function loadApplication () {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}


export default function App() {

  const [isReady, setIsReady] = useState(false)

  const [todoId, setTodoId] = useState(null)

  const [todos, setTodo] = useState([
    {
      id: "1",
      title: "abc"
    },
    {
      id: "2",
      title: "def"
    },
  ])

    if(!isReady) {
      return (<AppLoading 
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />)
    }

    // let [fontsLoaded] = Font.useFonts({
      // 'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
      // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    //   'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    // 'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    // });
  

  const addTodo = (title) => {

    const newTodo = {
      id: Date.now().toString(),
      title,
    }

    setTodo((prev) => [...prev, newTodo])

  }

  const removeTodo = id => {

    const todo = todos.find(t => t.id === id);

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
            setTodoId(null);
            setTodo(prev => prev.filter(todo => todo.id !== id))
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

  }

  const updateTodo = (id, title) => {
    setTodo(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo;
    }))
  }

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
  )

  if (todoId) {
    const todo = todos.find(todo => todo.id === todoId)
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
    <View style={styles.container}>

      <Navbar title={"todo app"} />
      {content}


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flex: 1
  },
  block2: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flex: 3
  },
  test: {
    fontFamily: 'roboto-bold'
  }
});
