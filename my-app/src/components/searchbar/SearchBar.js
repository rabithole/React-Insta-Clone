import React from 'react';
import './SearchBar.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	search = (e) => {
		e.preventDefault();
		this.props.search(this.state.search);
		this.setState({
			search: e.target.value
		})
		this.setState({ search: '' });
	};

	render() {
		return (
			<div className='searchBar'>
				<img src='../img/instagram-img.png' alt='instagram logo'/>
				<img src='../img/instagram.png' alt='instagram logo'/>
				<form onSubmit={this.search}>
					<input 
						type='text' 
						placeholder='Search' 
						name='search'
						onChange={this.handleChange}
						value={this.state.search}
					/>
				</form>
				<img src='../img/compass.png' alt='compass'/>
				<img src='../img/instagram-heart.png' alt='heart'/>
				<img src='../img/insta-person.png' alt='person'/>
			</div>
		)
	};

}

export default Search;