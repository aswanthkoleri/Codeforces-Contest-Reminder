/*Card component*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Icon from '@material-ui/core/Icon'
import Countdown from 'react-countdown-now';
/*User styles*/
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor : '#188bcc', 
    color : '#ffffff'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  contestIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Completionist = () => <span>Contest is Going on!</span>;
/*Renderer for the Countdown clock*/
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span><span className="first-color">{days}d</span> <span className="second-color">{hours}hr</span> <span className="third-color">{minutes}m</span> </span>;
  }
};

export default (props)=>{
	/*Card fields :
	1. Contest name 
	2. Contest Time
	3. Goto Contest button
	4. Alert me button*/
	/*Details to fetch
	1. Contest name
	2. Contest Time
	3. Contest Url
	<Name,Time,Url> 
	Props: name,time,url
	*/
	const classes = useStyles();
	return (
	/*Card Design start*/
	<Paper className="contest-tile">
	{/*<Typography variant="h5" component="h3">
          {props.name}
     </Typography>
     <Typography component="p">
          {props.time} {props.url}
     </Typography>*/}
     <Grid container className="main">
 {/*Two columns: 
 1. Contest details 
 2. Contest Time */}
     <Grid item md={8} className="first-half border-on">
     	<Grid container className="inner-main border-on">
     	{/*Two rows : 
     	1. Contest name
     	2. Contest Link and Contest Alert */}
     	<Grid item md={12} className="first-row border-on">
     	<Typography variant="h6" component="h3" className="small-padding">
          <Icon className={classes.contestIcon} fontSize="small">code</Icon> {props.name}
     	</Typography>
     	</Grid>
     	<Grid item md={12} className="extra-small-padding second-row border-on">
     	<Fab variant="extended" size="small" color="default" aria-label="Add" href={props.url} target="_blank" className={classes.margin}>
           <Icon className={classes.extendedIcon} fontSize="small">link</Icon>
          Link
        </Fab>
        {/*<Fab variant="extended" size="small" color="secondary" aria-label="Add" className={classes.margin}>
          <Icon className={classes.extendedIcon} fontSize="small">warning</Icon>
          Alert me
        </Fab>*/}
     	</Grid>
     	</Grid>
     </Grid>
     <Grid item md={4} className="center-content second-half border-on">
     <Typography variant="h4" component="h3">

          <Countdown date={props.time*1000} renderer={renderer} />
          {}
     </Typography>
     </Grid>
     </Grid>
	</Paper>
	/*Card Desing End*/
	);
}