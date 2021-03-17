import React, { useState } from 'react';
// import {useState} 
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { AddTodo } from './src/AddTodo.jsx';
import { Navbar } from './src/Navbar.jsx'
import { Todo } from './src/Todo.jsx';


export default function App() {

  const [todos, setTodo] = useState([
    {
      id: "1",
      title: "abc"
    },
    {
      id: "2",
      title: "abc"
    },
    
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    }

    setTodo((prev) => [...prev, newTodo])
  }

  console.log(todos);
  return (
    <ScrollView style={styles.container}>
      <Navbar title={"todo app"} />
      <View style={styles.block}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  block: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});
