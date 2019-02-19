import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import firebase from "firebase";

import MainComponent from "./components/main";

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDz5Ey4nojjIZP7xQjiXgt1IeWpLKPT6Bg",
      authDomain: "lgtm-hackathon3.firebaseapp.com",
      databaseURL: "https://lgtm-hackathon3.firebaseio.com",
      projectId: "lgtm-hackathon3",
      storageBucket: "lgtm-hackathon3.appspot.com",
      messagingSenderId: "544347365624"
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  }
}

export default App;
