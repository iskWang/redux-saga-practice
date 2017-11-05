import { CounterTypes } from '../actions/CounterAction'

const INIT_COUNTER_STATE = {
  start: false,
  time: 0
}

export default (state = INIT_COUNTER_STATE, { type = '' }) => {
  let _nextState = ''

  switch (type) {
    case CounterTypes.COUNTER_START:
      _nextState = { ...state, start: true }
      break
    case CounterTypes.COUNTER_PAUSE:
      _nextState = { ...state, start: false }
      break
    case CounterTypes.COUNTER_RESET:
      _nextState = { ...state, time: 0 }
      break
    case CounterTypes.COUNTER_TICK:
      _nextState = { ...state, time: state.time + 1 }
      break
    default:
      _nextState = state
      break
  }

  console.log('Current store', _nextState)

  return _nextState
}
