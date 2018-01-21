import React, { Component } from 'react';

import VideoListItem from './video_list_item';

class VideoList extends Component {
	render() {
		const { videos, handleVideoSelect } = this.props;

		const videoItems = videos.map(video => {
			return (
				<VideoListItem
					handleVideoClick={handleVideoSelect}
					key={video.etag}
					video={video}
				/>
			);
		});

		return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		);
	}
};

export default VideoList;
