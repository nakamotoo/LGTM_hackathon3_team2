import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import MainComponent from "./components/main";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
