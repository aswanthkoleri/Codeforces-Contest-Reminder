import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Contests from './Contests';
import logo from './../assets/images/codeforces1.png';
import Grid from '@material-ui/core/Grid';
console.log(logo)

// Now this is the base of the app
export default class App extends React.Component {
	render() {
		const jsx= (
			<Container>
			<Grid container className="heading">
			<Grid item md={12}>
			<Typography variant="h3" gutterBottom>
        	<img src={logo} alt="Logo" className="logo-codeforces" />Upcoming Code<span className="second-color">forces</span> Contests
        	</Typography>
        	</Grid>
        	</Grid>
			{/*List of Contest*/}
			<Contests/>
			</Container>
			)
		return jsx
	}
}
