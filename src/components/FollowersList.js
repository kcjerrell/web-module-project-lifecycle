import React from 'react';
import fetch from '../apiAccess';
import GitHubCard from './GitHubCard';

class FollowList extends React.Component {
	state = {
		users: [],
	};

	componentDidMount() {
		this.updateList();
	}

	componentDidUpdate(oldProps) {
		console.log("list update")
		if (oldProps.dir !== this.props.dir)
			this.updateList();
	}

	updateList()
	{
		const { username, dir } = this.props;

		const url = `https://api.github.com/users/${username}/follow${dir}`;

		fetch(url)
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
							<GitHubCard key={user.login} userdata={user} indent={1}/>
						);
					})
					: <p>Loading...</p>
				}
			</div>
		);
	}
}

export default FollowList;
