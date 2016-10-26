import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import asyncActionCallbackMiddleware from './utils/asyncActionCallbackMiddleware';
import reduxPromiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import * as reducers from './reducers';
import Login from './page/login';

let logger = createLogger({
    predicate: (getState, action) => false,
    level: 'info',
    duration: true,
    colors: {
        prevState: () => '#FFEB3B',
        nextState: () => '#4CAF50',
    },
    diff: true
})

let middlewares = [
    thunk,
    asyncActionCallbackMiddleware,
    reduxPromiseMiddleware,
    logger
];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const rootreducer = combineReducers(reducers);
const store = createStoreWithMiddleware(rootreducer);

export default class navigator extends Component {
   constructor(props) {
     super(props);
   }
   render() {
    let defaultName = 'Login';
    let defaultComponent = Login;
    return (
      <Provider store={store}>
        <Navigator
          initialRoute = {{ name: defaultName, component: defaultComponent }}
          configureScene = {(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          } }
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator = {navigator} />
          } }
          />
      </Provider>
    );
  }

};