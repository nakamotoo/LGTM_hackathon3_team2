import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import MainComponent from "./components/main";
import OrderScreen from "./components/orderScreen";

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="main"
            initial
            component={MainComponent}
            hideNavBar={true}
          />
          <Scene key="orderScreen" component={OrderScreen} />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
