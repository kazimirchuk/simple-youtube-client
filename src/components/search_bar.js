import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	render() {
		return (
			<div className="search-bar">
				<input value={this.state.term} onChange={this.handleInputChange.bind(this)} />
			</div>
		);
	}

	handleInputChange(event) {
		this.setState({
			term: event.target.value
		});

		this.props.handleSearchTermChange(this.state.term);
	}
}

export default SearchBar;