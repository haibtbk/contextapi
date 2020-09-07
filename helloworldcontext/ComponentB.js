import React, { Component, useContext } from 'react';
import { Text, SafeAreaView, Button } from 'react-native'
import HelloContext from './Context'

const ComponentB = (props) => {

  const mssg = useContext(HelloContext)
  return (
    <SafeAreaView>
      <Text> {mssg.message} </Text>
      <Button title="click here" onPress={() => mssg.callback("xin chao, toi la component B")} />
    </SafeAreaView>
  )
}

export default ComponentB;