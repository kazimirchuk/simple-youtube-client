import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import config from './../config';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch(config.DEFAULT_SEARCH_TERM);
	}

	render() {
		const { selectedVideo, videos } = this.state;
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);

		return (
			<div>
				<SearchBar handleSearchTermChange={videoSearch}/>
				<VideoDetail video={selectedVideo}/>
				<VideoList
					handleVideoSelect={this.handleVideoSelect.bind(this)}
					selectedVideo={selectedVideo}
					videos={videos}
				/>
			</div>
		);
	}

	handleVideoSelect(selectedVideo) {
		this.setState({ selectedVideo });
	}

	videoSearch(term) {
		YTSearch({
			key: config.API_KEY,
			term
		}, videos => this.setState({ videos, selectedVideo: videos[0] }));
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));
