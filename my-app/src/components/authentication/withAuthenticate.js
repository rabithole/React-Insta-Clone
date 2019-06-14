import React from 'react';
import Login from '../login/Login';
import PostPage from '../postcontainer/PostsPage';

class Authenticate extends React.Component {
	constructor() {
		super();
		this.state = {
			loggedIn: false,
		}
	}

	componentDidMount() {
		if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
	}

	render() {
		if (this.state.loggedIn) {
			return <PostPage />;
		}
			return <Login />;
	}
}

export default Authenticate;