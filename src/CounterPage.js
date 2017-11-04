import React, { Component } from 'react'

import './App.css'

class CounterPage extends Component {
  constructor (props) {
    super (props)

    this.state = {

    }
  }

  render () {
    return (
      <div className="Container">
        <div className="App">
          <div class="text-container">
            <p>Current Mode:</p>
            <p>Current Value:</p>
            <p>Current T:</p>
            <br />
            <label>
              <span>Initial Value:</span>
              <input type="text" id="InitValue" name="InitValue" />
            </label>
            <br />
            <label>
              <span>Step:</span>
              <input type="text" id="steps" name="steps" />
            </label>
          </div>
          <div class="btn-container">
            <div class="btn"><a href='#'>Start</a></div>
            <div class="btn"><a href='#'>Stop</a></div>
            <div class="btn"><a href='#'>Reset</a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default CounterPage