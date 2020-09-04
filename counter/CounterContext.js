// CounterContext.js
import React, {useState} from 'react'

// Declaring the state object globally.
const initialCounterState = {
  count: 0,
  increment: () =>{},
  decrement: () => {}
}

export const CounterContext = React.createContext(initialCounterState)

export const CounterContextProvider = (props) => {
  
  const [context, setContext] = useState({count:0})
  
  const increment = () => {
    setContext({count: context.count + 1})
  }
  const decrement = () => {
    setContext({count: context.count -1})
  }

  return (
    <CounterContext.Provider value={{count:context.count, decrement, increment}}>
      {props.children}
    </CounterContext.Provider>
  )

}