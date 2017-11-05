// Ref. https://github.com/jaysoo/example-redux-saga/blob/master/src/timer/saga.js
import { call, take, put, cancel, fork } from 'redux-saga/effects'
import { CounterTypes } from '../actions/CounterAction'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function * tick () {
  while (true) {
    yield call(delay, 1000)
    yield put({type: CounterTypes.COUNTER_TICK})
  }
};

function * timer () {
  while (yield take(CounterTypes.COUNTER_START)) {
    // starts the task in the background
    const bgSyncTask = yield fork(tick)

    // wait for the user stop action
    yield take(CounterTypes.COUNTER_PAUSE)
    // user clicked stop. cancel the background task
    // this will throw a SagaCancellationException into task
    yield cancel(bgSyncTask)
  }
};

export default function * rootSaga () {
  yield timer()
};
