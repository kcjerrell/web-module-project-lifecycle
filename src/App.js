import axios from 'axios';
import React from 'react';
import { dummyGet } from './dummyData';
import FollowList from './components/FollowersList';
import GitHubCard from './components/GitHubCard';
import { AppContainer, AppHeaderStyled } from './styled';
import gitHubLogo from './image/githublogo.png';
import lambdaLogo from './image/lambdalogo.png';

class App extends React.Component {
  state = {
    username: "kcjerrell",
  }

  componentDidMount() {
    // axios.get("https://api.github.com/users/kcjerrell/following")
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <AppHeaderStyled className="App-header">
          <img src={lambdaLogo} alt="Lambda Logo" />
          <p>❤️'s</p>
          <img src={gitHubLogo} alt="GitHub Logo" />
        </AppHeaderStyled>

        <AppContainer>
          <GitHubCard username={this.state.username} />
          <FollowList username={this.state.username} dir="ing"/>
        </AppContainer>



      </div>
    );
  }
}

export default App;
