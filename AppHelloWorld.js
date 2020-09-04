import React, { Component } from "react";
import Component1 from './helloworld/Component1'; 
import HelloContext from './helloworld/Context';

class AppHelloWorld extends Component {
  state = {
    message: 'Hello Bui Hai'
  }
  render() {
    return (
      <HelloContext.Provider
        value={ {message: this.state.message} }>
          <Component1 />
      </HelloContext.Provider>
    );
  }
}

export default AppHelloWorld;