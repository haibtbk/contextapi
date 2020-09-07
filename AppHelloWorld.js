import React, { Component } from "react";
import { Alert } from "react-native";
import ComponentA from './helloworldcontext/ComponentA'; 
import HelloContext from './helloworldcontext/Context';

class AppHelloWorld extends Component {
  state = {
    message: 'Hello Bui Hai'
  }
  render() {
    return (
      <HelloContext.Provider
        value={ {message: this.state.message, callback: (text) => {Alert.alert(text)}} }>
          <ComponentA />
      </HelloContext.Provider>
    );
  }
}

export default AppHelloWorld;