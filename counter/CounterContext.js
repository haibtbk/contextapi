// CounterContext.js
import React, { useState } from 'react'
import CounterContext from './Context.js'
// Declaring the state object globally.



export const CounterContextProvider = ({ children }) => {

  const [context, setContext] = useState({ count: 0, increment, decrement })

  const increment = () => {
    setContext({ ...context, count: context.count + 1 })
  }
  const decrement = () => {
    setContext({ ...context, count: context.count - 1 })
  }

  return (
    <CounterContext.Provider value={{ count: 0, increment, decrement }}>
        {children}
    </CounterContext.Provider>
  )

}