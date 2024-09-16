import React from 'react';
import fetch from '../apiAccess';
import { FollwersListContainer } from '../styled';
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
		if (oldProps.dir !== this.props.dir || oldProps.username !== this.props.username)
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

	handleClick = (user) => {
		this.props.commands.selectUser(user.login);
	}

	render() {

		return (
			<FollwersListContainer>
				{this.state.users.length > 0
					? this.state.users.map(user => {
						return (
							<GitHubCard
								key={user.login}
								userdata={user}
								indent={1}
								size="mini"
								onClick={() => this.handleClick(user)}
								style={{maxWidth: '25%'}}/>
						);
					})
					: <p>Loading...</p>
				}
			</FollwersListContainer>
		);
	}
}

export default FollowList;
