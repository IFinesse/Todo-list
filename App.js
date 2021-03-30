import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text} from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { MainLayout } from './src/MainLayout.js';
import {TodoState} from './src/context/todo/TodoState'


async function loadApplication () {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}


export default function App() {

  const [isReady, setIsReady] = useState(false)

    if(!isReady) {
      return (<AppLoading 
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />)
    }
  
  return (
   <TodoState>
     <MainLayout/>
    {/* <Text>111</Text> */}
   </TodoState>
  // <View></View>
  )
}


