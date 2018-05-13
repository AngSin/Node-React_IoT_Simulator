import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from '../constants/server';

export default class Reading extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(isActive) {
    this.setState({ isLoading: true });
    const url = `${ROOT_URL}/device/${this.props.name}?active=${isActive}`;
    axios.patch(url)
      .then(res => {
        this.props.toggleActive(this.props.readingIndex, isActive);
        this.setState({ isLoading: false, error: false });
      })
      .catch(e => {
        console.log(e);
        this.setState({ isLoading: false, error: true });
      });
  }
  
  render() {
    return (
      <li className={ this.state.isLoading ? 'loading' : '' }>
        { this.state.isLoading ? <div className={ "loading-overlay" }/> : null }
        { this.state.error ? 
            <div className={ "error-container" }>
              <div className={ "error-alert" }>
                <p className={ "error-message" }>Whoops! Something went wrong 😭 {"\n"} Are you sure your device is in reach?</p>
                <btn onClick={ () => this.toggleActive(!this.props.active) }>Try again? </btn>
              </div>
            </div> 
              : 
            null 
        }
        <p className={ "active-status" }>
            Active:&nbsp;&nbsp;&nbsp;
            <label className={ `switch` }>
              <input 
                onClick={ e => this.toggleActive(e.target.checked) } 
                ref={ ref => this.toggleSwitch = ref } 
                type="checkbox"
                checked={ this.props.active }
                // onChange={ () => console.log("switch clicked") } // can be used to get rid of a react warning
              />
              <span className="slider round"></span>
            </label>
          </p>
        <div className={ "device-info" }>
          <br/>
          <br/>
          <h3>{ this.props.name }</h3>
          <p>Reading: <span className={ "reading-value" }>{ this.props.reading }</span></p>
          <p>Recorded on: <span className={ "reading-value" }>{ this.props.timestamp }</span></p>
        </div>
      </li>
    );
  }
}