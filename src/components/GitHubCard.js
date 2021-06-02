import React from 'react';
import fetch from '../apiAccess';
import { GitHubCardContainer } from '../styled';

class GitHubCard extends React.Component {
	state = {
		userData: null
	};

	componentDidMount() {
		// this component can receive either a username only, or partial userdata
		const { userdata } = this.props;
		let username = this.props.username;

		// fill in some of the userdata
		if (userdata) {
			username = userdata.login;
			this.setState({ userData: userdata });
		}

		const url = `https://api.github.com/users/${username}`;
		// and fetch the rest
		fetch(url)
			.then(response => {
				this.setState({ userData: response.data });
			})
			.catch(error => console.log(`Error fetching '${url}': ${error}`));
	}

	noneableValue(value) {
		if (value)
			return <span className="value">{value}</span>;
		else
			return <span className="value" style={{ fontStyle: 'italic' }}>none</span>
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

							<p>
								<span className="prop">Location:&nbsp;</span>
								{this.noneableValue(user.location)}
							</p>

							<p>
								<span className="prop">Profile:&nbsp;</span>
								<a href={user.html_url}>{user.html_url}</a>
							</p>

							<p>
								<span className="prop">Followers:&nbsp;</span>
								<span className="value">{user.followers}</span>
							</p>

							<p>
								<span className="prop">Following:&nbsp;</span>
								<span className="value">{user.following}</span>
							</p>

							<p>
								<span className="prop">Bio:&nbsp;</span>
								{this.noneableValue(user.bio)}
							</p>
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
