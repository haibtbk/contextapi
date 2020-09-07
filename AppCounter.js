import React, { useContext } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import { CounterContextProvider } from './counter/CounterContext'
import CounterContext from './counter/Context.js'

const RenderUsingUsecontext = (props) => {
  // Using useContext API
  const { count, increment, decrement } = useContext(CounterContext)
  return (
    <View>
      <Text>{`Clicked ${count} times!`}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  )
}

const AppCounter = (props) => {
  
  return (
    <SafeAreaView>
      <CounterContextProvider>
        <RenderUsingUsecontext/>
      </CounterContextProvider>
    </SafeAreaView>
  )
}

export default AppCounter