import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

export default class Contests extends React.Component {
	/*state = {
        contests : ["contest1","contest2","contest3"] 
    };*/
    constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      contests: []
	    };
	}
    componentDidMount() {
    		/*Things to do: 
    		1. Fetch Codeforces contests from the API
    		2. Store all the contest details in the state*/
    		/*Step 1 : Fetching the Codeforces contests from the API */
    	fetch("https://codeforces.com/api/contest.list").then(res => res.json()).then(
        	(result) => {
        		const contests=result["result"].filter(contest => contest.phase==="BEFORE" )
        		/*Step 2 : Store all the contest details in the state*/
          		this.setState({
            		isLoaded: true,
            		contests
          			});
          		console.log(this.state.contests)
        		},
        	(error) => {
          		this.setState({
            		isLoaded: true,
            		error
         	   	});
       		}
      	)
    	
    }
	render(){
		const contestUrl="https://codeforces.com/contests/"
		/*Here we have to display a list of contests in the form of cards*/
		const { error, isLoaded, contests } = this.state;
		if (error) {
      		return <div>Error: {error.message}</div>;
    	} else if (!isLoaded) {
      		return <div>Loading...</div>;
    	} else {
      		return (
        		<ul className="contest-list">
          		{contests.map(contest => (
            		<Card key={contest.id} name={contest.name} time={contest.startTimeSeconds} url={contestUrl+contest.id} />
          		))}
        		</ul>
      		);
    	}
  	}
}
