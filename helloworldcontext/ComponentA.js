import React,  {useContext} from 'react';
import {Button, SafeAreaView} from 'react-native'
import ComponentB from './ComponentB';
import HelloContext from './Context'

function ComponentA() {
  const {callback} = useContext(HelloContext)
  return (
    <SafeAreaView>
      <Button title="component A clicked" onPress={() => callback("toi la component A")}/>
      <ComponentB />
    </SafeAreaView>

  );
}

export default ComponentA;