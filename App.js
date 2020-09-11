import React, { useContext, useCallback, useState, useMemo } from 'react'
import { Button, SafeAreaView, Alert, Text, View } from 'react-native'

// export const Counter = React.memo(({ value, children, onClick }) => {
//   console.log('Render: ', children)

//   return (
//     <Button title={children + ":" + value} onPress={onClick} />
//   )
// })

// const App = (props) => {

//   const [count1, setCount1] = React.useState(0)
//   const [count2, setCount2] = React.useState(0)

//   const increaseCounter1 = React.useCallback(() => {
//     setCount1(count1+1)
//   }, [count1])

//   const increaseCounter2 = React.useCallback(() => {
//     setCount2(count2+1)
//   }, [count2])

//   return (
//     <>
//       <Counter value={count1} onClick={increaseCounter1}>Counter 1</Counter>
//       <Counter value={count2} onClick={increaseCounter2}>Coutner 2</Counter>
//     </>
//   )

// }
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
  // const memoizedValue = useCallback(computeExpensiveValue(a, b), [a, b]);
  // or useMemo
   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


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