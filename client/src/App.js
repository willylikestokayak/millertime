import React, { Component } from 'react';
import './App.css';
import JobDetail from "./JobDetail";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    fetch("/jobs")
      .then(response => response.json())
      .then(response => this.setState({jobs: response}))
  }


  render() {
    return (
<div>
    <div id="header" className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                <i className="icon-reorder"></i>
            </button>
            <a className="navbar-brand" href="#">
                Beth Miller Time
            </a>
        </div>
        <nav className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li>
                    <a href="#">Job Search</a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Profile<b className="caret"></b></a>
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
                    <ul className="nav list-group">
                        <li>
                            <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 2</a>
                        </li>
                        <li>
                            <a className="list-group-item" href="#"><i className="icon-home icon-1x"></i>Sidebar Item 9</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="main-wrapper" className="col-md-10 pull-right">
                <div id="main">
                  <div className="page-header">
                    <h3>Admin</h3>
                  </div>
                  {/*PUT THE JOBDETAIL page HERE*/}
                  <JobDetail obj="sup"/>
                </div>

                <div className="col-md-12 footer">
                  <ul className="nav navbar-nav">A Project Inspired by Beth Miller, Cooked Up By: Chad Coker, Brian Conner, Reggie Baker & Tony Bricca</ul>
                </div>

            </div>
    </div>
</div>


    );
  }
}

export default App;
