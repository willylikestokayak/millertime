import React, { Component } from 'react';
import UserDetail from './UserDetail';
import './App.css';


import JobList from './JobList.js';
import JobDetail from './JobDetail.js';
import UserDetail from './UserDetail.js';
import Headline from './Headline.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs:[],
      activeJob:''
    }
  }
 
  componentDidMount() {
    fetch("/jobs/joblist")
    .then((r) => r.json())
    .then((r) => {
      let arr = r;
      this.setState({
        jobs: arr
      })
    })
  }
  

  render() {
    console.log("APPSTATE", this.state)
    return (
      <Router>
        <div>
          <div id="header" className="navbar navbar-default navbar-fixed-top">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                <i className="icon-reorder"></i>
              </button>
              <a className="navbar-brand" href="#">Beth Miller Time</a>
            </div>
            <nav className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/jobDetailRoute">Job List</Link>
                </li>
                <li className="dropdown">
                  <Link to="/userDetailRoute">User Detail</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav pull-right">
                <li className="dropdown">
                  <a href="#" id="nbAcctDD" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-user"></i>Username<i className="icon-sort-down"></i></a>
                  <ul className="dropdown-menu pull-right">
                    <li><a href="#">Log Out</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div id="wrapper">
            <div id="sidebar-wrapper" className="col-md-2">
                <div id="sidebar">
                    <Headline />
                    <JobList activeJob={this.state.activeJob} jobs={this.state.jobs}/>
                </div>
              </div>
              <div id="main-wrapper" className="col-md-10 pull-right">
                <div id="main">
                  <div className="page-header">
                    <h3>Admin</h3>
                  </div>
<<<<<<< HEAD
                  < UserDetail />
=======
                  <Route exact path="/jobDetailRoute" component={JobDetail} />
                  <Route exact path="/userDetailRoute" component={UserDetail} />
>>>>>>> 483b2f80ac952fabcdf96f1dd1199cc66e46fa21
                </div>
                <div className="col-md-12 footer">
                  <ul className="nav navbar-nav">A Project Inspired by Beth Miller, Cooked Up By: Chad Coker, Brian Conner, Reggie Baker & Tony Bricca</ul>
                </div>
              </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
