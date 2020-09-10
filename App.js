import React, { useContext, useCallback, useState, useMemo } from 'react'
import { Button, SafeAreaView, Alert, Text, View } from 'react-native'

const App = (props) => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const doSomethingSily = () => {
    Alert.alert("Silly showed")
  }
  const computeExpensiveValue = (x, y) => {
    doSomethingSily()
    return x + y
  }
  const memoizedValue = useCallback(computeExpensiveValue(a, b), [a, b]);
  // or useMemo
  //  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


  const onClickButton = () => {
    Alert.alert("value: " + memoizedValue)
  }

  return (
    <SafeAreaView>
      <Button title="Clicked" onPress={() => onClickButton()} />
      <Text>abc</Text>
    </SafeAreaView>
  )
}

export default App