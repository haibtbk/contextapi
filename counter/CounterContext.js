// CounterContext.js
import React, {useState} from 'react'

// Declaring the state object globally.

export const CounterContext = React.createContext({})

export const CounterContextProvider = (props) => {
  
  const [context, setContext] = useState(initialCounterState)
  const initialCounterState = {
    count: 0,
    increment: () => {
      context.count += 1
      setContext(context)
    },
    decrement: () => {
      context.count += 1
      setContext(context)
    },
  }
  return (
    <CounterContext.Provider value={this.state.context}>
      {this.props.children}
    </CounterContext.Provider>
  )

}