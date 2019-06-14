import React from 'react';
import Login from '../login/Login';
import PostPage from '../postcontainer/PostsPage';

// class Authenticate extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
			
// 		}
// 	}

// 	componentDidMount() {
// 		if (!localStorage.getItem('user')) {
//         this.setState({ loggedIn: false });
//       } else {
//         this.setState({ loggedIn: true });
//         localStorage.removeItem('user')
//       }
// 	}

// 	render() {
// 		if (this.state.loggedIn) {
// 			return <PostPage />;
// 		}
// 			return <Login />;
// 		}
// }

const withAuthenticate = PostPage => Login =>
  class extends React.Component {
  	constructor() {
  		super();
  		this.state = {
			
		}
  	}

  	componentDidMount() {
		if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
        localStorage.removeItem('user')
      }
	}

    render() {
      	if (this.state.loggedIn) {
			return <PostPage />;
		}
			return <Login />;
		}
    }
 

// const HOComponent = withAuthenticate(Authenticate)

export default withAuthenticate;