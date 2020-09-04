import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native'
import HelloContext from './Context'

class Component2 extends Component {
  render() {
    return (
      <HelloContext.Consumer>
        {mssg => (
          <SafeAreaView>
            <Text> {mssg.message} </Text>
          </SafeAreaView>
        )}

      </HelloContext.Consumer>
    );
  }
}

export default Component2;