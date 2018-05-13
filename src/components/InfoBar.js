import React from 'react';
import SearchBar from './SearchBar';

export default ({ total, countOfActive, countOfInactive, searchReadings }) => {
  return (
    <div id="menu">
      <div id="info-bar">
        <span><span className={ "total" }>Readings:</span> { total }</span>
        <span><span className={ "active" }>Active:</span> { countOfActive }</span>
        <span><span className={ "inactive" }>Inactive:</span> { countOfInactive }</span>
      </div>
      <SearchBar searchReadings={ searchReadings }/>
    </div>
  )
}
