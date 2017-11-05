export const CounterTypes = {
  COUNTER_START: 'COUNTER_START',
  COUNTER_PAUSE: 'COUNTER_PAUSE',
  COUNTER_RESET: 'COUNTER_RESET',
  COUNTER_TICK: 'COUNTER_TICK'
}

const CounterAction = {
  start: (payload = {}) => ({type: CounterTypes.COUNTER_START, ...payload}),
  pause: (payload = {}) => ({type: CounterTypes.COUNTER_PAUSE, ...payload}),
  reset: (payload = {}) => ({type: CounterTypes.COUNTER_RESET, ...payload})
}

export default CounterAction
