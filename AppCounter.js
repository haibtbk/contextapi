import React, {useContext} from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import { CounterContextProvider, CounterContext } from './counter/CounterContext'

const AppCounter = () => {


  const renderUsingUsecontext = (props) => {
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
        {renderUsingUsecontext()}
      </CounterContextProvider>
    </SafeAreaView>
  )
}

export default AppCounter