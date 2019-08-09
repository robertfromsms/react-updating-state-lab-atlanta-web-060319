// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {
	constructor() {
		super()
		this.state = {
			timesClicked: 0
		}
		// this.letsMakeitLast = this.letsMakeitLast.bind(this)
	}

	// state = {timesClicked: 0}

	letsMakeitLast = (e) => {
		// let whateverthefuck = this.state
		// debugger
		this.setState({
			timesClicked: this.state.timesClicked + 1
		}, console.log(this.state))
	}

	render() {
		this.letsMakeitLast = this.letsMakeitLast.bind(this)
		return (
			<button type="button" onClick={this.letsMakeitLast}>{this.state.timesClicked}</button>
		)
	}
} 