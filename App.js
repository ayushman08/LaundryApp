/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,


} from 'react-native';

import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import SplashScreen from './App/Components/SplashComponent/SplashScreen';
import AppGlobalConfig from './App/AppGlobalConfig/AppConfig';
import RegisterationScreen from './App/Components/SigInAndSignUpComponent/RegisterationScreen';
import DashboardScreen from './App/Components/DashboardComponent/DashboardComponent';
// define router scenes
const scenes = Actions.create(
  <Scene key="root">

    <Scene key="SplashScreen" component={SplashScreen}
      hideNavBar={true}
      initial
    />

    <Scene key="registerScreen" component={RegisterationScreen}
      hideNavBar={true} />

      <Scene key="dashboardScreen" component={DashboardScreen}
      hideNavBar={true}
       />

    </Scene>

   

    
);

export default class App extends Component {

  constructor() {
    super();
    context = this;
    this.state = {
      initLoaded: false,
    };
    GLOBAL.AppGlobalConfig = AppGlobalConfig;
    AppGlobalConfig.init().finally(() => {
      SplashScreen.hide();
      this.setState({
        initLoaded: true,
      });
    });
  }

  render() {
    return (
      <Router
        scenes={scenes}
      />
    );
  }
}
