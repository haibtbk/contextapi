import React, { Component } from "react";
import Component1 from './helloworld/Component1'; 
import HelloContext from './helloworld/Context';

class App extends Component {
  state = {
    message: 'Hello World Bui Hai'
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

export default App;