import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import MainComponent from "./components/main";

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageA" initial component={MainComponent} />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
