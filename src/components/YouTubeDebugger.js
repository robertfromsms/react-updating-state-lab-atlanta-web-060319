// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
	constructor() {
		super()
		this.state = {
			errors: [],
  			user: null,
  			settings: {
    			bitrate: 8,
    			video: {
      				resolution: '1080p'
    			}
    		}
    	}
	}

	handleBitrate = (event) => {
		let state = this.state
		if (state.settings.bitrate === 8) {
			state.settings.bitrate = 12	
		}
		else {
			state.settings.bitrate = 8
		}
		this.setState(state)
		return null
	}

	handleResolution = (event) => {
		let state = this.state
		if (state.settings.video.resolution === '1080p') {
			state.settings.video.resolution = '720p'
		}
		else {
			state.settings.video.resolution = '1080p'
		}
		this.setState(state)
		return null
	}

	render() {
		return (
			<div>
				<button type="button" className="bitrate" onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
				<button type="button" className="resolution" onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
			</div>
		)
	}
} 