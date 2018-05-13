import React, { Component } from 'react'

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.setState({ searchTerm: '' });
    this.props.searchReadings(searchTerm);
  }

  render() {
    return (
      <form id="search-bar" onSubmit={ (e) => this.search(e) }>
        <input 
          type="text" 
          ref={ ref => this.textInput = ref }
          value={ this.state.searchTerm }
          onChange={ e => this.setState({ searchTerm: e.target.value }) }
        />
        <btn onClick={ (e) => this.search(e) }>
          &nbsp;&nbsp;🔎
        </btn>
      </form>
    )
  }
}

