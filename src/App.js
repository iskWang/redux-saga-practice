import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import {
  CounterPage
} from './containers'

export default () => {
  return (
    <Provider store={store}>
      <CounterPage />
    </Provider>
  )
}
