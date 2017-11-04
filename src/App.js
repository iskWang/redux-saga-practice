import React, { Component } from 'react';
import { Provider } from "react-redux";

import store from './store'
import CounterPage from './CounterPage'

export default () => {
  return (
    <Provider store={store}>
      <CounterPage />
    </Provider>
  )
}
