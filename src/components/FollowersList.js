import React from 'react';
import { dummyGet } from '../dummyData';
import GitHubCard from './GitHubCard';

class FollowList extends React.Component {
	state = {
		users: [],
	};

	componentDidMount() {
		const { username, dir } = this.props;

		const url = `https://api.github.com/users/${username}/follow${dir}`;

		dummyGet(url)
			.then(response => {
				this.setState({ users: response.data });
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div>
				{this.state.users.length > 0
					? this.state.users.map(user => {
						return (
							<GitHubCard userdata={user} indent={1}/>
						);
					})
					: <p>Loading...</p>
				}
			</div>
		);
	}
}

export default FollowList;
