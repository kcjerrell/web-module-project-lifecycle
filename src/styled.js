import styled from 'styled-components';

export const FollwersListContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: top;
`;

export const GitHubCardContainer = styled.div`
	margin: 0em 0em 0em;
	/* margin-left: ${props => props.indent ? "4em" : "0em"}; */
	padding: 1em;

	.card {
		border: 1px solid black;
		width: 100%;
		padding: 20px;
		display: flex;
		border-radius: 5px;
	box-shadow: 0 0px 8px -1px #000;
		background-color: #FFF;


		img {
			width: 180px;
			height: 180px;
			border-radius: 3px;
			margin-right: 20px;
		}


		.name {
			font-size: 1.5em;
			color: blue;
		}

		a {
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}

		p {
			/* font-size: 1.2rem;
			margin-bottom: 3px; */
			margin-block-start: .5em;
		}

		.prop {
			font-size: 1em;
			font-weight: 600;
		}

		.username {
			font-size: 1.2rem;
			font-style: italic;
			/* margin: 3px 0 10px; */
		}

		.follows {
			background-color: #22222222;
			position: absolute;
			right: 0px;
			bottom: 0px;
		}
	}

	.card.mini {
		display: flex;
		flex-direction: column;
		align-items: center;

		/* width: 180px; */

		img {
			width: 120px;
			height: 120px;
			object-fit: contain;
			margin: auto;
		}

		.prop, .username, .follows, p {
			display: none;
		}

		.name {
			font-size: 1.2em;
		}
	}

	.card.mini:hover {
	box-shadow: 0 0px 4px 1px #88F;
	/* border: 1px solid #009; */
}
`;

export const AppContainer = styled.div`
	max-width: 800px;
  margin: 0px auto;
  padding: .5em;
  display: flex;
  flex-direction: column;
	/* justify-content: space-evenly; */
  align-items: auto;
	min-height: 100vh;

	background-color: #22222255;
`;

export const AppHeaderStyled = styled.header`
margin: 0px auto;
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: white;

	width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;

	padding: .5em;

	img {
		width: 150px;
		height: 150px;
	}

	p {
		font-size: 48px;
	}
`;