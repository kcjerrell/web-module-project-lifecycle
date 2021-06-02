import React from 'react';
import FollowList from './components/FollowersList';
import GitHubCard from './components/GitHubCard';
import { AppContainer, AppHeaderStyled } from './styled';
import gitHubLogo from './image/githublogo.png';
import lambdaLogo from './image/lambdalogo.png';

class App extends React.Component {
  state = {
    user: "kcjerrell",
    follow: ""
  }

  componentDidMount() {
    // axios.get("https://api.github.com/users/kcjerrell/following")
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
  }

  selectUser = username => {
    this.setState({ user: username });
  }

  showFollow = dir => {
    this.setState({ follow: dir });
  }

  commands = {selectUser: this.selectUser, showFollow: this.showFollow };

  render() {
    return (
      <div>
        <AppHeaderStyled className="App-header">
          <img src={lambdaLogo} alt="Lambda Logo" />
          <p>❤️'s</p>
          <img src={gitHubLogo} alt="GitHub Logo" />
        </AppHeaderStyled>

        <AppContainer>
          <GitHubCard username={this.state.user} size="top" commands={this.commands}/>
          {this.state.follow && <FollowList username={this.state.user} dir={this.state.follow} />}
        </AppContainer>



      </div>
    );
  }
}

export default App;
