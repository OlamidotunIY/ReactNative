import React, { Component } from "react";
import { View, Text } from "react-native";

import { Router, Scene } from "react-native-router-flux";
import AnimateScenes from "./AnimateScenes";
import Auth from "./Auth";
import Chatroom from "./Chatroom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

export default class LoadingScenes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene
            component={AnimateScenes}
            key="loading"
            initial={true}
            hideNavBar
          />
        </Scene>

        <Scene component={Login} key="login" hideNavBar={true} ></Scene>
        <Scene component={Register} key="register" hideNavBar={true} ></Scene>
        <Scene component={Chatroom} key="chatroom" hideNavBar={true} ></Scene>
        <Scene component={Auth} key="auth" hideNavBar={true} ></Scene>
      </Router>
    );
  }
}
