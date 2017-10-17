import React, { Component } from 'react';
// import App from './App.js'
import './App.css';

class JobList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [
     	{
        	title: "Junior Dev",
        	companyName: "Google",
        	skills: "HTML, CSS, JS, React, hipster vibes",
        	rating: "Unicorn",
        	statusString: "applied",
    	}, {
        	title: "Junior Dev",
        	companyName: "FaceBooks",
        	skills: "HTML, CSS, JS, React, hipster vibes",
        	rating: "Unicorn",
        	statusString: "applied",
    	}],
    	selectedJob:{}
    }
  }

  // componentDidMount() {
  // 	//fetch joblist from db
  // }

  componentWillReceiveProps(nextProps) {
  	console.log(nextProps);
  }


  render() {
    return (
    	<div>
			<ul className="nav list-group">
				{this.state.jobs.map((job,index) => {
					return(
						<li key={index}>
        	        	    <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>
        	        	    <div><span className="col md 4">Title: </span><span>{job.title}</span></div>
        	        	    <div><span className="col md 4">Company: </span><span>{job.companyName}</span></div>
        	        	    <div><span className="col md 4">Rating: </span><span>{job.rating}</span></div>
        	        	    </a>
        	        	</li>
					)
				})}
			</ul>
			<div className="text-center"><button>Add Job</button></div>
		</div>
    );
  }
}

export default JobList;




