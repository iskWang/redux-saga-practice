import React, { Component } from 'react'
import { connect } from 'react-redux';

import { CounterAction } from '../actions'

import '../styles/CounterPageStyle.css'

class CounterPage extends Component {
  constructor (props) {
    super (props);

    this.state = {
      start: props.counterState.start && false,
      time: props.counterState.time || 0,
      value: 0,
      _value: 0,
      _step: 1
    }
  };

  componentWillReceiveProps (nextProps) {
    if (this.props.counterState.start !== nextProps.counterState.start) {
      this.setState({start: nextProps.counterState.start});
    }

    if (this.props.counterState.time !== nextProps.counterState.time) {
      let time = nextProps.counterState.time;
      let value = this.state._value + (time + (time - 1)) * this.state._step;

      this.setState({time, value});
    }
  };

  onStartBtnClick = () => {
    this.props.askCounterStart();
  };

  onPauseBtnClick = () => {
    this.props.askCounterPause();
  };

  onResetBtnClick = async() => {
    const { _value } = this.state;

    await this.props.askCounterReset()
    this.setState({value: _value})
  };

  _renderTextContainer = () => {
    const { start, value, time, _value, _step } = this.state;

    let _mode = '';

    if (start) {
      _mode = 'Active';
    } else {
      _mode = 'Inactive'
    }

    return (
      <div className="text-container">
        <p>Current Mode: {_mode}</p>
        <p>Current Value: {value}</p>
        <p>Current T: {time}</p>
        <br />
        <label>
          <span>Initial Value:</span>
          <input
            type="text"
            id="InitValue"
            name="InitValue"
            value={_value}
            onChange={(e) => {
              if (this.state.start === true) {
                return
              }
              this.setState({_value: Number(e.target.value)})
            }}
          />
        </label>
        <br />
        <label>
          <span>Step:</span>
          <input
            type="text"
            id="steps"
            name="steps"
            value={_step}
            onChange={(e) => {
              if (this.state.start === true) {
                return
              }
              this.setState({_step: Number(e.target.value)})
            }}
          />
        </label>
      </div>
    )
  };

  _renderBtnContainer = () => {
    const { start } = this.state;

    let _startBtnStyle = 'btn';
    let _pauseBtnStyle = 'btn';

    if (start) {
      _startBtnStyle += ' disable';
    } else {
      _pauseBtnStyle += ' disable';
    }

    return (
      <div className="btn-container">
        <div className={_startBtnStyle}>
          <a onClick={this.onStartBtnClick}>Start</a>
        </div>
        <div className={_pauseBtnStyle}>
          <a onClick={this.onPauseBtnClick}>Pause</a>
        </div>
        <div className="btn">
          <a onClick={this.onResetBtnClick}>Reset</a>
        </div>
      </div>
    )
  };

  render () {
    return (
      <div className="Container">
        <div className="App">
          { this._renderTextContainer() }
          { this._renderBtnContainer() }
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    counterState: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    askCounterStart: (payload) => dispatch(CounterAction.start(payload)),
    askCounterPause: (payload) => dispatch(CounterAction.pause(payload)),
    askCounterReset: (payload) => dispatch(CounterAction.reset(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
