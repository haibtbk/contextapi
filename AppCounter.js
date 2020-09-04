import React from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import { CounterContext } from './counter/CounterContext_'
import { CounterContextProvider } from './counter/CounterContext_'

const AppCounter = () => {


  const renderUsingUsecontext = () => {
    // Using useContext API
    const { count, increment, decrement } = React.useContext(CounterContext)
    return (
      <View>
        <Text>{`Clicked ${count} times!`}</Text>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
      </View>
    )
  }

  const renderUsingConsomers = () => {
    return (
      <CounterContext.Consumer>
        {({ count, increment, decrement }) => (
          <SafeAreaView>
            <Text>{`Clicked ${count} times!`}</Text>
            <Button title="Increment" onPress={increment} />
            <Button title="Decrement" onPress={decrement} />
          </SafeAreaView>
        )}
      </CounterContext.Consumer>
    )
  }

  return (
    <SafeAreaView>
      <CounterContextProvider>
        {renderUsingConsomers()}
      </CounterContextProvider>
    </SafeAreaView>
  )
}

export default AppCounter