import React from 'react';
import { dummyGet } from '../dummyData';
import { GitHubCardContainer } from '../styled';

class GitHubCard extends React.Component {
	state = {
		userData: null
	};

	componentDidMount() {
		const { username, userdata } = this.props;

		if (userdata) {
			this.setState({ userData: userdata });
		}
		else {
			const url = `https://api.github.com/users/${username}`;
			dummyGet(url)
				.then(response => {
					this.setState({ userData: response.data });
				})
				.catch(error => console.log(error));
		}
	}

	render() {
		const user = this.state.userData;
		const { indent } = this.props;

		return (
			<GitHubCardContainer indent={indent}>
				{this.state.userData
					? <div className="card">

						<img src={user.avatar_url} alt={`avatar for ${user.login}`} />

						<div className="card-info">
							<h3 className="name">{user.name}</h3>
							<p className="username">{user.login}</p>
							<p>Location: {user.location}</p>
							<p>
								Profile:
								<a href={user.html_url}>{user.html_url}</a>
							</p>
							<p>Followers: {user.followers}</p>
							<p>Following: {user.following}</p>
							<p>{user.bio}</p>
						</div>
					</div>

					: <div className="card">
						<h2>Loading...</h2>
					</div>

				}
			</GitHubCardContainer>
		);
	}
}

export default GitHubCard;
