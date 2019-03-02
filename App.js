/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Tab from './src/config/navigation'
import { Provider } from 'react-redux'
import store from './src/store/store'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Provider store={store}>
        <Tab />
      </Provider>
    );
  }
}