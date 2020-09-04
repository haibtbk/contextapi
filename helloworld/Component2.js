import React, { Component } from 'react';
import { Text, SafeAreaView, Button } from 'react-native'
import HelloContext from './Context'

class Component2 extends Component {
  render() {
    return (
      <HelloContext.Consumer>
        {mssg => (
          <SafeAreaView>
            <Text> {mssg.message} </Text>
            <Button title="click here" onPress={()=> mssg.callback("xin chao, toi la component 2")}/>
          </SafeAreaView>
        )}

      </HelloContext.Consumer>
    );
  }
}

export default Component2;