import React, { Component } from 'react';
import UserDetail from './UserDetail';
import './App.css';


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
    <div id="header" class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                <i class="icon-reorder"></i>
            </button>
            <a class="navbar-brand" href="#">
                Beth Miller Time
            </a>
        </div>
        <nav class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li>
                    <a href="#">Job Search</a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Profile<b class="caret"></b></a>
                </li>
            </ul>
            <ul class="nav navbar-nav pull-right">
                <li class="dropdown">
                    <a href="#" id="nbAcctDD" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-user"></i>Username<i class="icon-sort-down"></i></a>
                    <ul class="dropdown-menu pull-right">
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
    <div id="wrapper">
      <div id="sidebar-wrapper" class="col-md-2">
                <div id="sidebar">
                    <ul class="nav list-group">
                        <li>
                            <a class="list-group-item" href="#"><i class="icon-home icon-1x"></i>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a class="list-group-item" href="#"><i class="icon-home icon-1x"></i>Sidebar Item 2</a>
                        </li>
                        <li>
                            <a class="list-group-item" href="#"><i class="icon-home icon-1x"></i>Sidebar Item 9</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="main-wrapper" class="col-md-10 pull-right">
                <div id="main">
                  <div class="page-header">
                    <h3>Admin</h3>
                  </div>
                  < UserDetail />
                </div>

                <div class="col-md-12 footer">
                  <ul class="nav navbar-nav">A Project Inspired by Beth Miller, Cooked Up By: Chad Coker, Brian Conner, Reggie Baker & Tony Bricca</ul>
                </div>

            </div>
    </div>
</div>


    );
  }
}

export default App;
