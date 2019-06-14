import React from 'react';
import Login from '../login/Login';

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
		return (
			<div>
				if (this.state.loggedIn) return <PostsPage />;
      				return <LoginPage />;
			</div>
		)
	}
}

export default Authenticate;