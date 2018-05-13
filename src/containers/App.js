import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getReadings, toggleActive, searchReadings, updateCount } from '../actions/readings_actions';
import Reading from '../components/Reading';
import Title from '../components/Title';
import InfoBar from '../components/InfoBar';

class App extends Component {
	componentDidMount() {
		this.props.getReadings();
	}
	
	renderReadings() {
		return this.props.readings.map((reading, index) => 
			<Reading 
				key={ index } 
				name={ reading.name } 
				toggleActive={ this.props.toggleActive } 
				active={ reading.active } readingIndex={ index }
				reading={ `${parseFloat(Math.round(reading.value * 100) / 100).toFixed(2)} ${reading.unit}` }
				timestamp={ `${new Date(reading.timestamp)}` }
			/>
		);
	}

	searchReadings(searchTerm) {
		this.props.getReadings()
			.then(() => this.props.searchReadings(searchTerm.trim()))
			.then(() => this.props.updateCount(this.props.readings));
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<div id="header">
					<Title />
					<InfoBar 
						total={ this.props.readings.length }
						countOfActive={ this.props.countOfActive }
						countOfInactive={ this.props.readings.length - this.props.countOfActive }
						searchReadings={ (searchTerm) => this.searchReadings(searchTerm) }
					/>
				</div>
				<ul id="main">
						{ this.renderReadings() }
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { readings, countOfActive } = state;
	return {
		readings,
		countOfActive
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getReadings, toggleActive, searchReadings, updateCount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
